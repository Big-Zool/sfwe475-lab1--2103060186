export type Task = { id: number; title: string; done: boolean; dueDate?: string };

export function addTask(tasks: Task[], title: string): Task[] {
  const id = tasks.length + 1;
  return [...tasks, { id, title, done: false }];
}

export function findTask(
  tasks: Task[],
  id: number
): { ok: true; task: Task } | { ok: false; error: string } {
  const task = tasks.find((t) => t.id === id);
  if (task === undefined) {
    return { ok: false, error: "task " + id + " not found" };
  }
  return { ok: true, task };
}

export function daysUntilDue(task: Task): number | null {
  if (task.dueDate === undefined) {
    return null;
  }
  const due = new Date(task.dueDate);
  return Math.ceil((due.getTime() - Date.now()) / 86_400_000);
}

export function toggleTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
}

export function filterTasks(tasks: Task[], filter: "all" | "done" | "open"): Task[] {
  if (filter === "done") {
    return tasks.filter((t) => t.done);
  }
  if (filter === "open") {
    return tasks.filter((t) => !t.done);
  }
  return tasks;
}
