import { addTask, generateTasks, createTaskElement, Task, getPopulatedStorage } from "./manageTasks"

const taskBlock = document.querySelector(".taskBlock");
addTask('Hello', 'There', '2023-01-01', 'Over');
getPopulatedStorage();
generateTasks(0);

export { taskBlock };