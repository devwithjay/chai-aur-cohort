document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const sunIcon = themeToggle.children[0];
  const moonIcon = themeToggle.children[1];

  if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }

  themeToggle.addEventListener('click', event => {
    if (event.target.closest('span') === sunIcon) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else if (event.target.closest('span') === moonIcon) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  const taskModal = document.getElementById('task-modal');
  const taskForm = document.getElementById('task-form');
  const addTaskButtons = document.querySelectorAll('button:has(i.fa-plus)');
  const closeModalButtons = document.querySelectorAll(
    '#task-modal button:not([type="submit"])',
  );

  const taskLists = document.querySelectorAll('.task-list');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  renderAllTasks();

  addTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
      const column = button.closest('div.flex-col').querySelector('.task-list');
      const columnTitle = button
        .closest('div.flex-col')
        .querySelector('h3').textContent;

      taskForm.dataset.targetColumn = Array.from(taskLists).indexOf(column);
      document.querySelector('#task-modal h3').textContent =
        `Add New Task to ${columnTitle}`;

      taskForm.reset();

      delete taskForm.dataset.editTaskId;

      taskModal.classList.remove('hidden');
      taskModal.classList.add('flex');
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      taskModal.classList.add('hidden');
      taskModal.classList.remove('flex');
    });
  });

  taskForm.addEventListener('submit', e => {
    e.preventDefault();

    const columnIndex = parseInt(taskForm.dataset.targetColumn);
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const priority = document.getElementById('task-priority').value;
    const dueDate = document.getElementById('task-due-date').value;
    const assignee = document.getElementById('task-assignee').value;

    const editTaskId = taskForm.dataset.editTaskId;

    if (editTaskId) {
      const taskIndex = tasks.findIndex(t => t.id === editTaskId);
      if (taskIndex !== -1) {
        tasks[taskIndex] = {
          ...tasks[taskIndex],
          title,
          description,
          priority,
          dueDate,
          assignee,
        };
      }
    } else {
      const newTask = {
        id: Date.now().toString(),
        title,
        description,
        priority,
        dueDate,
        assignee,
        column: columnIndex,
      };

      tasks.push(newTask);
    }

    saveTasks();

    renderAllTasks();

    taskModal.classList.add('hidden');
    taskModal.classList.remove('flex');
  });

  function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderAllTasks() {
    taskLists.forEach(list => (list.innerHTML = ''));

    tasks.forEach(task => {
      const targetColumn = taskLists[task.column];
      renderTask(task, targetColumn);
    });
  }

  function handleDragStart(event) {
    const taskElement = event.target.closest('.task');
    const taskId = taskElement.dataset.taskId;
    event.dataTransfer.setData('text/plain', taskId);
    taskElement.classList.add('opacity-50');
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.currentTarget.classList.add('bg-gray-200', 'dark:bg-gray-700');
  }

  function handleDragLeave(event) {
    event.currentTarget.classList.remove('bg-gray-200');
  }

  function handleDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');
    const newColumn = event.target.closest('.task-list');

    event.currentTarget.classList.remove('bg-gray-200');

    if (!newColumn) return;

    const newColumnIndex = Array.from(taskLists).indexOf(newColumn);
    updateTaskColumn(taskId, newColumnIndex);
  }

  function updateTaskColumn(taskId, newColumnIndex) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.column = newColumnIndex;
      saveTasks();
      renderAllTasks();
    }
  }

  taskLists.forEach(list => {
    list.addEventListener('dragover', handleDragOver);
    list.addEventListener('dragleave', handleDragLeave);
    list.addEventListener('drop', handleDrop);
  });

  function renderTask(task, targetColumn) {
    const taskElement = document.createElement('div');
    taskElement.className =
      'task bg-white dark:bg-gray-800 rounded-md shadow-lg p-4 min-h-[180px] flex flex-col border-l-4 hover:shadow-xl transition-shadow';

    const priorityBorder = {
      low: 'border-green-400',
      medium: 'border-amber-400',
      high: 'border-red-400',
    };

    taskElement.classList.add(priorityBorder[task.priority]);
    taskElement.dataset.taskId = task.id;

    const priorityBgColor = {
      low: 'bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200',
      medium:
        'bg-amber-200 text-amber-800 dark:bg-amber-700 dark:text-amber-200',
      high: 'bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-200',
    };

    const truncateText = (text, maxLength) => {
      if (text && text.length > maxLength) {
        return text.substring(0, maxLength) + '......';
      }
      return text || 'No description';
    };

    const truncatedDescription = truncateText(task.description, 100);

    taskElement.draggable = true;
    taskElement.addEventListener('dragstart', handleDragStart);
    taskElement.addEventListener('dragend', event => {
      event.target.classList.remove('opacity-50');
    });

    taskElement.innerHTML = `
  <div class="flex justify-between items-start mb-4">
    <h4 class="font-medium text-gray-900 dark:text-white text-lg">${task.title}</h4>
    <span class="text-sm px-3 py-1 rounded-md ${priorityBgColor[task.priority]} font-medium">${capitalizeFirstLetter(task.priority)}</span>
  </div>
  <p class="text-gray-600 dark:text-gray-400 text-sm flex-grow overflow-y-auto mb-4">${truncatedDescription}</p>
  <div class="flex flex-col mt-auto border-t dark:border-gray-700 pt-2">
    ${
      task.dueDate
        ? `
      <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">
        <i class="far fa-calendar-alt text-gray-400 dark:text-gray-500"></i>
        <span >${formatDate(task.dueDate)}</span>
      </div>`
        : ''
    }
    ${
      task.assignee
        ? `
      <div class="text-sm text-gray-500 dark:text-gray-400">
        <i class="far fa-user mr-4 text-gray-400 dark:text-gray-500"></i>
        <span>${task.assignee}</span>
      </div>`
        : ''
    }
  </div>
  <div class="flex justify-end space-x-4 mt-4">
    <button class="edit-task text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button class="delete-task text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      <i class="fas fa-trash"></i>
    </button>
  </div>
`;

    taskElement
      .querySelector('.edit-task')
      .addEventListener('click', () => editTask(task.id));
    taskElement
      .querySelector('.delete-task')
      .addEventListener('click', () => deleteTask(task.id));

    targetColumn.appendChild(taskElement);
  }

  function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description || '';
    document.getElementById('task-priority').value = task.priority;
    document.getElementById('task-due-date').value = task.dueDate || '';
    document.getElementById('task-assignee').value = task.assignee || '';

    taskForm.dataset.editTaskId = taskId;
    taskForm.dataset.targetColumn = task.column;

    document.querySelector('#task-modal h3').textContent = 'Edit Task';

    taskModal.classList.remove('hidden');
    taskModal.classList.add('flex');
  }

  function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
      tasks = tasks.filter(task => task.id !== taskId);

      saveTasks();
      renderAllTasks();
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function formatDate(dateString) {
    const options = {year: 'numeric', month: 'short', day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const editBoardModal = document.getElementById('edit-board-modal');
  const closeEditBoardModal = document.getElementById('close-edit-board-modal');
  const editBoardForm = document.getElementById('edit-board-form');
  const boardNameInput = document.getElementById('board-name-input');
  const boardColorInput = document.getElementById('board-color-input');
  const cancelEditBoard = document.getElementById('cancel-edit-board');
  const clearBoardBtn = document.getElementById('clear-board-btn');

  let currentBoardElement = null;

  document.querySelectorAll('.edit-board-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const board = e.target.closest('.flex-col');
      currentBoardElement = board;

      const boardName = board.querySelector('h3').textContent.trim();
      boardNameInput.value = boardName;

      const header = board.querySelector('div:first-child');
      const currentBg = window.getComputedStyle(header).backgroundColor;
      boardColorInput.value = rgbToHex(currentBg);

      editBoardModal.classList.remove('hidden');
      editBoardModal.classList.add('flex');
    });
  });

  closeEditBoardModal.addEventListener('click', hideEditBoardModal);
  cancelEditBoard.addEventListener('click', hideEditBoardModal);

  clearBoardBtn.addEventListener('click', () => {
    if (confirm('Clear all tasks in this board?')) {
      const taskList = currentBoardElement.querySelector('.task-list');
      taskList.innerHTML = '';

      const columnIndex = Array.from(
        document.querySelectorAll('.task-list'),
      ).indexOf(taskList);
      tasks = tasks.filter(task => task.column !== columnIndex);
      saveTasks();
    }
  });

  editBoardForm.addEventListener('submit', e => {
    e.preventDefault();

    const newBoardName = boardNameInput.value.trim();
    const newBoardColor = boardColorInput.value;

    if (currentBoardElement) {
      currentBoardElement.querySelector('h3').textContent = newBoardName;
      const header = currentBoardElement.querySelector('div:first-child');
      header.style.background = newBoardColor;

      const addTaskButton = currentBoardElement.querySelector(
        'button:has(i.fa-plus)',
      );
      if (addTaskButton) {
        const classesToRemove = [
          'text-gray-600',
          'dark:text-gray-400',
          'border-gray-300',
          'dark:border-gray-600',
          'hover:bg-gray-100',
          'dark:hover:bg-gray-700',
        ];
        addTaskButton.classList.remove(...classesToRemove);

        addTaskButton.setAttribute('data-custom-color', 'true');
        const rgb = hexToRgb(newBoardColor);
        if (rgb) {
          addTaskButton.style.setProperty('--btn-color', newBoardColor);
          addTaskButton.style.setProperty(
            '--btn-hover-bg',
            `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
          );
        }
      }
    }

    hideEditBoardModal();
  });

  function hideEditBoardModal() {
    editBoardModal.classList.add('hidden');
    editBoardModal.classList.remove('flex');
  }

  function rgbToHex(rgb) {
    const rgbValues = rgb.match(/\d+/g).map(Number);
    return '#' + rgbValues.map(x => x.toString(16).padStart(2, '0')).join('');
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
