import { TaskSchema, type Task } from "./schemas";

export async function fetchTodo(id: number): Promise<Task | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { signal: controller.signal }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch todo ${id}: server returned ${response.status} ${response.statusText}`
      );
      return null;
    }

    const payload: unknown = await response.json();
    const result = TaskSchema.safeParse(payload);

    if (!result.success) {
      console.error(`Failed to validate todo ${id}:`, result.error.issues);
      return null;
    }

    return result.data;
  } catch (error: unknown) {
    if (controller.signal.aborted) {
      console.error(`Failed to fetch todo ${id}: request timed out after 3 seconds`);
    } else {
      console.error(`Failed to fetch todo ${id}: network or response error`, error);
    }
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchTodos(ids: number[]) {
  return Promise.all(ids.map((id) => fetchTodo(id)));
}
