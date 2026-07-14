/**
 * Exercise notes
 *
 * The index page displays a todolist.
 *
 * The `currentTodos` variable holds the full list;
 * the associated functions to sort, filter and so on are missing.
 *
 * Complete the code following the instructions.
 */
let currentTodos = [];
let taskCounter = 1;

const todoTbody = document.getElementById('todo-tbody');
const totalTimeEl = document.getElementById('total-time');
const addPresetBtn = document.getElementById('add-preset-btn');
const sortBtn = document.getElementById('sort-btn');
const boostBtn = document.getElementById('boost-btn');
const lowerBtn = document.getElementById('lower-btn');
const filterHighCheckbox = document.getElementById('filter-high-priority');
const statusPanel = document.getElementById('status-panel');

function generatePresetTodo() {
  const priorities = ['Low', 'Medium', 'High'];
  const randomHours = Math.floor(Math.random() * 5) + 1;
  const randomPriority = priorities[Math.floor(Math.random() * priorities.length)];

  /**
   * Create a task with properties:
   *  - id: unique
   *  - task: the task name; use taskCounter to count
   *  - durationHours: use the random value above
   *  - priority: use the random value above
   *
   * Add the task to the `currentTodos`.
   */
}

function deleteTodoById(id) {
  /**
   * Delete the task, filtering on the provided id.
   */
}

function sortTodosByDurationDesc() {
  /**
   * Sort by durationHours
   */
}

function getHighPriorityTodos() {
  /**
   * Retrieve only the tasks with 'High' priority.
   */
}

function calculateTotalHours(todosList) {
  /**
   * Calculate the duration of all the tasks.
   */
}

function boostPriorities() {
  /**
   * Remap the tasks increasing their priority:
   * Low => Medium
   * Medium => High
   *
   * Remember to not override the current priority! Use temporary var and spread operator.
   */
}

function lowerPriorities() {
  /**
   * Remap the tasks decreasing their priority:
   * High => Medium
   * Medium => Low
   *
   * Remember to not override the current priority! Use temporary var and spread operator.
   */
}

function checkOverload() {
  /**
   * Return true if at least one task has duration equal or greater than 5.
   */
}

function checkSprintReady() {
  /**
   * Return true if at least one task and if all of them have duration equal or lower than 2.
   */
}

function updateStatusPanel() {
  statusPanel.innerHTML = '';

  if (checkOverload()) {
    const warning = document.createElement('div');
    warning.className = 'status-badge badge-warning';
    warning.innerText = '⚠️ Alert: You have at least one highly demanding task (5h+)!';
    statusPanel.appendChild(warning);
  }

  if (checkSprintReady()) {
    const success = document.createElement('div');
    success.className = 'status-badge badge-success';
    success.innerText = '⚡ Sprint Ready: Every single task is 2 hours or less!';
    statusPanel.appendChild(success);
  }
}

function render() {
  todoTbody.innerHTML = '';

  const tasksToDisplay = filterHighCheckbox.checked
    ? getHighPriorityTodos()
    : currentTodos;

  tasksToDisplay.forEach(todo => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td><strong>${todo.task}</strong></td>
      <td>${todo.durationHours}h</td>
      <td>${todo.priority}</td>
      <td><button class="btn-delete">Delete 🗑️</button></td>
    `;

    tr.querySelector('.btn-delete').addEventListener('click', () => {
      deleteTodoById(todo.id);
      render();
    });

    todoTbody.appendChild(tr);
  });

  const totalHours = calculateTotalHours(tasksToDisplay);
  totalTimeEl.innerText = `${totalHours}h`;
  updateStatusPanel();
}

addPresetBtn.addEventListener('click', () => {
  generatePresetTodo();
  render();
});

sortBtn.addEventListener('click', () => {
  sortTodosByDurationDesc();
  render();
});

boostBtn.addEventListener('click', () => {
  boostPriorities();
  render();
});

lowerBtn.addEventListener('click', () => {
  lowerPriorities();
  render();
});

filterHighCheckbox.addEventListener('change', render);

render();