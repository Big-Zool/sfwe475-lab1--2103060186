While `await fetch(...)` is waiting, the async function pauses without blocking the whole JavaScript runtime. Other work, such as handling timers, I/O, or events, can continue; once the response arrives, the function resumes after the `await`.

The parallel version is faster because it starts all network requests together instead of waiting for each response before starting the next request.

A real application needs a timeout so a slow or unreachable service cannot leave requests and dependent user actions waiting indefinitely, even if the server is usually fast.

TypeScript stayed silent because `response.json()` is typed as `any`, so it can be returned as `Task` without checking that the API data has the required fields. The return annotation only affects compile-time checking and does not convert or validate the JSON at runtime. The mismatch became visible when the program accessed `todo.done`: the API response has `completed` instead, so JavaScript printed `undefined`. Runtime validation or explicit conversion is needed to make external data conform to the `Task` type.

The failing `safeParse` cases produced these `error.issues` outputs:

```text
[
  {
    expected: 'string',
    code: 'invalid_type',
    path: [ 'title' ],
    message: 'Invalid input: expected string, received undefined'
  }
]
```

This means the `missingField` object has no `title`; the schema requires `title` to be a string, but its value is missing (`undefined`).

```text
[
  {
    expected: 'boolean',
    code: 'invalid_type',
    path: [ 'done' ],
    message: 'Invalid input: expected boolean, received string'
  }
]
```

This means the `wrongType` object has a `done` field, but its value `"yes"` is a string rather than the boolean required by the schema.

`createTask` accepts `unknown` because its input has not been checked yet; the value could have come from an untrusted caller and may not match the task shape. After Zod validates it, the returned task has the schema-inferred type. Declaring the parameter as `Task` would claim the data is already valid and could let callers pass unvalidated input, repeating the earlier mistake where the API response was typed as a task without checking its actual shape.
