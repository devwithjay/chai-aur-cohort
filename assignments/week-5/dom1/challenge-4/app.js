const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

function createTask(taskText) {
  const li = document.createElement("li");
  li.classList.add("task-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete-checkbox");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  return li;
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  if (document.querySelector(".empty-list")) {
    taskList.innerHTML = "";
  }

  const taskElement = createTask(taskText);
  taskList.appendChild(taskElement);
  taskInput.value = "";
  updateStats();
}

function updateStats() {
  const tasks = document.querySelectorAll(".task-item");
  const completed = document.querySelectorAll(".task-item.completed");
  totalTasks.textContent = `Total tasks: ${tasks.length}`;
  completedTasks.textContent = `Completed: ${completed.length}`;
}

taskList.addEventListener("click", e => {
  const target = e.target;
  const taskItem = target.closest(".task-item");

  if (target.classList.contains("complete-checkbox")) {
    taskItem.classList.toggle("completed");
  } else if (target.classList.contains("delete-button")) {
    taskItem.remove();
    if (taskList.children.length === 0) {
      taskList.innerHTML = `<li class="empty-list">No tasks yet. Add one above!</li>`;
    }
  }
  updateStats();
});

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

updateStats();
