const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.querySelector('.tasks__add');

tasksAdd.addEventListener('click', (event) => {
  event.preventDefault();
  if(taskInput.value.trim().length > 0) {
    tasksList.insertAdjacentHTML('beforeend', `
      <div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
      `);
    taskInput.value = '';
      
    const task = Array.from(tasksList.querySelectorAll('.task'));
    const taskRemoveAll = Array.from(tasksList.querySelectorAll('.task__remove'));
    
    const index = taskRemoveAll.length - 1;
    taskRemoveAll[index].onclick = function() {
      task[index].remove();
    }
  }
})