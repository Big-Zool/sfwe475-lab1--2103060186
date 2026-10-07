import { CreateTaskSchema } from "./schemas";

export function createTask(payload: unknown) {
  const result = CreateTaskSchema.safeParse(payload);

  if (!result.success) {
    return { ok: false as const, error: result.error.flatten() };
  }

  return { ok: true as const, task: result.data };
}
