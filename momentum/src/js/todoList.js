const addTask = document.getElementById('add');
const newTask = document.querySelector('.newtask input');
const tasks = document.querySelector('.tasks');

addTask.onclick = function(){
  if (newTask.value.length === 0) {
    alert('Please enter a task');
  } else {
    tasks.innerHTML = `
      <div class="task">
        <span id="taskname">
          ${newTask.value}
        </span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;
    const deleteTask = document.querySelectorAll('.delete');
    for (let i = 0; i < deleteTask.length; i++) {
      deleteTask[i].onclick = function() {
        this.parentNode.remove();
      }
    }
  }
}
