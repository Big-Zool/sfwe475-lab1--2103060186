import { addTask, findTask, toggleTask, filterTasks, type Task } from "./tasks";

let tasks: Task[] = [];
tasks = addTask(tasks, "Read Chapter 1");

const first = findTask(tasks, 1);
if (first.ok) {
  console.log(first.task.title);
} else {
  console.log(first.error);
}

const missing = findTask(tasks, 99);
if (missing.ok) {
  console.log(missing.task.title);
} else {
  console.log(missing.error);
}

// stretch
tasks = addTask(tasks, "Do Lab 1");
const newTasks = toggleTask(tasks, 1);
console.log("done:", filterTasks(newTasks, "done").map((t) => t.title));
console.log("open:", filterTasks(newTasks, "open").map((t) => t.title));
console.log("all:", filterTasks(newTasks, "all").map((t) => t.title));
