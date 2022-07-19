import { setLocalStorage } from "../common/util";

const todoForm = document.querySelector('.todo__container');
const newTask = document.querySelector('.newtask input');
const todoList = document.querySelector('.tasks');

let tasks = JSON.parse(localStorage.getItem('todo-task')) || [];

if (localStorage.getItem('todo-task')) {
  tasks.map(task => {
    createTask(task);
  });
}
// submit form
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = newTask.value;

  if (inputValue !== '') {
    const task = {
      id: new Date().getTime(),
      name: inputValue,
      isCompleted: false
    };
    tasks.push(task);
    setLocalStorage('todo-task', JSON.stringify(tasks));
    createTask(task);
    todoForm.reset();
  }
  newTask.focus();
});

// remove task
todoList.addEventListener('click', (event) => {
  if (
    event.target.classList.contains("remove-task") ||
    event.target.parentElement.classList.contains("remove-task")
  ) {
    const taskId = event.target.closest("li").id;
    removeTask(taskId);
  }
});

// update task - change status or name
todoList.addEventListener("input", (event) => {
  const taskId = event.target.closest("li").id;
  updateTask(taskId, event.target);
});

// prevent new lines with Enter
todoList.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});

// create task
function createTask(data) {
  const taskEl = document.createElement("li");
  taskEl.setAttribute("id", data.id);
  const taskElMarkup = `
    <div class="checkbox-wrapper">
      <input type="checkbox" id="${data.name}-${data.id}" name="tasks" ${
        data.isCompleted ? "checked" : ""
  }>
      <label for="${data.name}-${data.id}">
      </label>
      <span ${!data.isCompleted ? "contenteditable" : ""}>${data.name}</span>
    </div>
    <button class="remove-task" title="Remove ${data.name} task">
    <i class="fas fa-trash"></i>
    </button>
  `;
  taskEl.innerHTML = taskElMarkup;
  todoList.appendChild(taskEl);
};

// function remove task
function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== parseInt(taskId, 10));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById(taskId).remove();
};

// function update task
function updateTask(taskId, el) {
  const task = tasks.find((taskItem) => taskItem.id === parseInt(taskId, 10));

  if (el.hasAttribute("contentEditable")) {
    task.name = el.textContent;
  } else {
    const span = el.nextElementSibling.nextElementSibling;
    task.isCompleted = !task.isCompleted;
    if (task.isCompleted) {
      span.removeAttribute("contenteditable");
      el.setAttribute("checked", "");
    } else {
      el.removeAttribute("checked");
      span.setAttribute("contenteditable", "");
    }
  }
  setLocalStorage("todo-task", JSON.stringify(tasks));
};
