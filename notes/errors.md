# Strand 2 - version numbers

"typescript": "^7.0.2"

7 is major, 0 minor, 2 patch.
major = big change, minor = new feature, patch = bug fix. ^ updates but stays on 7

# Strand 3 - the errors

1. let tasks = [] -> the list is empty so TypeScript doesn't know the type of it
2. title -> tell me what is the title , text ? number ?
3. done: "false" -> done must be boolean (true/false) but it was written as text "false" with quotes
4. find -> find can return nothing "undefined" if it doesn't find the task
5. dueDate -> dueDate is optional so it can be missing

# Strand 3 - stretch

* toggleTask flips done (false -> true), and gives back a new list without changing the old one.
* filterTasks takes "all", "done" or "open" and returns only the matching tasks. TypeScript won't let me pass any other word.

# Strand 2 - challenge

clean script: "clean": "rm -rf dist"

node_modules is not in Git because it is very big and anyone can get it back by running npm install

# Strand 3 - challenge

* findTask now gives back { ok: true, task } or { ok: false, error }, so I have to check ok before I can read task.
* I turned on noUncheckedIndexedAccess and nothing broke because I don't use tasks[0] anywhere.
