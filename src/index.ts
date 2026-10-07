import { createTasks } from "./createTask";

const payloads: unknown = [
  { title: "Read", dueDate: "2026-10-08" },
  { dueDate: "2026-10-08" },
  { title: 42 },
];

const result = createTasks(payloads);

if (result.ok) {
  console.log("Successful tasks:", result.successes);
  console.log("Failed tasks:", result.failures);
} else {
  console.error("Could not process task batch:", result.error);
}
