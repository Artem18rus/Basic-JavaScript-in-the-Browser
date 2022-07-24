const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

taskInput.addEventListener('keydown', (event) => {
  if(event.key == 'Enter' && taskInput.value.length > 0) {
    tasksList.innerHTML+=`
      <div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`;
      taskInput.value = '';
      event.preventDefault();
      
    const task = Array.from(tasksList.querySelectorAll('.task'));
    const taskRemoveAll = Array.from(tasksList.querySelectorAll('.task__remove'));

    for(let i = 0; i < task.length; i++) {
      taskRemoveAll[i].onclick = function() {
        task[i].remove();
      }
    }
  }
})


const tasksAdd = document.querySelector('.tasks__add');

tasksAdd.addEventListener('click', (event) => {
  if(taskInput.value.length > 0) {
    tasksList.innerHTML+=`
      <div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`;
    taskInput.value = '';
    event.preventDefault();
      
    const task = Array.from(tasksList.querySelectorAll('.task'));
    const taskRemoveAll = Array.from(tasksList.querySelectorAll('.task__remove'));

    for(let i = 0; i < task.length; i++) {
      taskRemoveAll[i].onclick = function() {
        task[i].remove();
      }
    }
  }
})
