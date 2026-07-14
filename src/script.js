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

  const newTodo = {
    id: Date.now(),
    task: `Preset Task Template #${taskCounter++}`,
    durationHours: randomHours,
    priority: randomPriority
  };

  currentTodos.push(newTodo);
}

function deleteTodoById(id) {
  currentTodos = currentTodos.filter(todo => todo.id !== id);
}

function sortTodosByDurationDesc() {
  currentTodos.sort((a, b) => b.durationHours - a.durationHours);
}

function getHighPriorityTodos() {
  return currentTodos.filter(todo => todo.priority === 'High');
}

function calculateTotalHours(todosList) {
  return todosList.reduce((acc, todo) => acc + todo.durationHours, 0);
}

function boostPriorities() {
  currentTodos = currentTodos.map(todo => {
    let nextPriority = todo.priority;
    if (todo.priority === 'Low') {
      nextPriority = 'Medium';
    } else if (todo.priority === 'Medium') {
      nextPriority = 'High';
    }

    return { ...todo, priority: nextPriority };
  });
}

function lowerPriorities() {
  currentTodos = currentTodos.map(todo => {
    let nextPriority = todo.priority;
    if (todo.priority === 'High') {
      nextPriority = 'Medium';
    } else if (todo.priority === 'Medium') {
      nextPriority = 'Low';
    }

    return { ...todo, priority: nextPriority };
  });
}

function checkOverload() {
  return currentTodos.some(todo => todo.durationHours >= 5);
}

function checkSprintReady() {
  return currentTodos.length > 0 && currentTodos.every(todo => todo.durationHours <= 2);
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