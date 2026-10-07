import { createTask } from "./createTask";

const payloads: unknown[] = [
  { title: "Read", dueDate: "2026-10-08" },
  { dueDate: "2026-10-08" },
  { title: 42 },
];

for (const payload of payloads) {
  const result = createTask(payload);

  if (result.ok) {
    console.log("Created task:", result.task);
  } else {
    console.error("Could not create task:", result.error);
  }
}
