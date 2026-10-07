# Self-check

## 1. Why does `await` only pause its function, not the whole program?

`await` suspends the current async function until its promise settles, but it does not block the JavaScript runtime. While that function is waiting, the runtime can continue processing other work, such as I/O callbacks, timers, and events.

## 2. Why did TypeScript accept `Task` for the mismatched API data?

The value from `response.json()` is typed as `any`, and `any` is assignable to `Task` without TypeScript checking that the required fields are present or have the right shape. A TypeScript return annotation does not inspect or transform data at runtime, so validation is needed before treating external JSON as a `Task`.

## 3. What is the difference between `parse()` and `safeParse()`?

`parse()` returns validated data when it matches the schema, but throws a Zod error when it does not. `safeParse()` instead returns a result object with either parsed data or validation errors, so `createTask` can return a clear success-or-failure result without throwing for invalid input.
