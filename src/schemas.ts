import { z } from "zod";

export const TaskSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  done: z.boolean(),
  dueDate: z.string().optional(),
});

export type Task = z.infer<typeof TaskSchema>;
export const TaskListSchema = z.array(TaskSchema);
export type TaskList = z.infer<typeof TaskListSchema>;

export const CreateTaskSchema = TaskSchema.omit({
  id: true,
  done: true,
});

export type CreateTaskInput = z.infer<typeof CreateTaskSchema>;
