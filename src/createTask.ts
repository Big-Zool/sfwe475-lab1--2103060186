import { z } from "zod";
import { CreateTaskSchema } from "./schemas";

export function createTask(payload: unknown) {
  const result = CreateTaskSchema.safeParse(payload);

  if (!result.success) {
    return { ok: false as const, error: result.error.flatten() };
  }

  return { ok: true as const, task: result.data };
}

export function createTasks(payload: unknown) {
  if (!Array.isArray(payload)) {
    return {
      ok: false as const,
      error: "Expected an array of create-task payloads.",
    };
  }

  const successes: Array<{
    index: number;
    task: z.infer<typeof CreateTaskSchema>;
  }> = [];
  const failures: Array<{
    index: number;
    error: z.inferFlattenedErrors<typeof CreateTaskSchema>;
  }> = [];

  payload.forEach((item: unknown, index: number) => {
    const result = CreateTaskSchema.safeParse(item);

    if (result.success) {
      successes.push({ index, task: result.data });
    } else {
      failures.push({ index, error: result.error.flatten() });
    }
  });

  return { ok: true as const, successes, failures };
}
