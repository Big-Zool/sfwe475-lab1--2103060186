# sfwe475-lab1--2103060186

## Strand 1: Web Platform & HTTP Overview

### 1. HTTP Request Inspection (`https://jsonplaceholder.typicode.com/todos/1`)

- **Request Method**: `GET`
- **Status Code**: `304` (when cached; becomes `200` upon hard refresh to clear cache)
- **Content-Type**: `application/json; charset=utf-8`
- **Body**:
```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

---

### 2. Invalid ID Inspection (`https://jsonplaceholder.typicode.com/todos/99999`)

- **Status Code**: `404 Not Found`
- **Explanation**: `4xx` is a client error, meaning the request was the problem (the requested resource does not exist).

---

### 3. URL Breakdown (`https://jsonplaceholder.typicode.com/todos/99999`)

| Part | Value | Description |
| :--- | :--- | :--- |
| **Scheme** | `https` | Protocol |
| **Host** | `jsonplaceholder.typicode.com` | Server name / domain |
| **Path** | `/todos/99999` | Resource path |

---

### 4. Query String (`https://jsonplaceholder.typicode.com/todos?userId=1`)

- **Query String**: `userId=1`
- **Explanation**: It uses the user ID to filter the search (returning only todos for user 1).

---

### 5. GET vs. POST Request

- A **GET** request asks the server to send data back to the client.
- A **POST** request asks the server to receive and process data that the browser sends in the body.

---

### 6. Cache Analysis (`Cache-Control`)

- **Is the response safe to cache?**: Yes.
- **Justification**: The header `cache-control: max-age=43200` lets the browser keep and reuse the response for 43,200 seconds. Nothing like `no-store` is present to forbid caching.
