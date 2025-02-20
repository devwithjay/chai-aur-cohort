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
  const closeModalButtons = document.querySelectorAll(
    '#task-modal button:not([type="submit"])',
  );

  let boards = JSON.parse(localStorage.getItem('boards')) || [
    {title: 'To Do', color: '#6366f1'},
    {title: 'In Progress', color: '#3b82f6'},
    {title: 'Review', color: '#f59e0b'},
    {title: 'Done', color: '#10b981'},
  ];

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let taskLists;

  renderBoards();

  renderAllTasks();

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
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;
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

  function saveBoards() {
    localStorage.setItem('boards', JSON.stringify(boards));
  }

  function renderAllTasks() {
    taskLists = document.querySelectorAll('.task-list');

    taskLists.forEach(list => {
      list.innerHTML = '';
    });

    tasks.forEach(task => {
      const columnIndex = task.column;
      if (columnIndex >= 0 && columnIndex < taskLists.length) {
        const targetColumn = taskLists[columnIndex];
        renderTask(task, targetColumn);
      }
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
    if (document.documentElement.classList.contains('dark')) {
      event.currentTarget.classList.add('bg-gray-700');
    } else {
      event.currentTarget.classList.add('bg-gray-200');
    }
  }

  function handleDragLeave(event) {
    event.currentTarget.classList.remove('bg-gray-200', 'bg-gray-700');
  }

  function handleDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');

    let targetList = event.target.closest('.task-list');

    if (targetList) {
      const newColumnIndex = Array.from(taskLists).indexOf(targetList);
      updateTaskColumn(taskId, newColumnIndex);

      targetList.classList.remove('bg-gray-200', 'bg-gray-700');

      if (document.documentElement.classList.contains('dark')) {
        targetList.classList.add('dark:bg-gray-700');
      }
    }
  }

  function updateTaskColumn(taskId, newColumnIndex) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].column = newColumnIndex;
      saveTasks();
      renderAllTasks();
    }
  }

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
      low: 'bg-green-500 text-white dark:bg-green-600',
      medium: 'bg-amber-500 text-white dark:bg-amber-600',
      high: 'bg-red-500 text-white dark:bg-red-600',
    };

    const truncateText = (text, maxLength) => {
      if (text && text.length > maxLength) {
        return text.substring(0, maxLength) + '......';
      }
      return text || 'No description';
    };

    const truncatedDescription = truncateText(task.description, 30);

    taskElement.draggable = true;
    taskElement.addEventListener('dragstart', handleDragStart);
    taskElement.addEventListener('dragend', event => {
      event.target.classList.remove('opacity-50');
    });

    taskElement.innerHTML = `
    <div class="flex justify-between items-start mb-4">
      <h4 class="font-medium text-gray-900 dark:text-white text-lg">${task.title}</h4>
      <span class="text-sm px-3 py-1 rounded-md ${priorityBgColor[task.priority]} font-medium">
        ${capitalizeFirstLetter(task.priority)}
      </span>
    </div>
    <p class="text-gray-600 dark:text-gray-400 text-sm overflow-hidden break-words mb-4" >
      ${truncatedDescription}
    </p>
    <div class="flex flex-col mt-auto border-t dark:border-gray-700 pt-2">
      ${
        task.dueDate
          ? `
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">
          <i class="far fa-calendar-alt text-gray-400 dark:text-gray-500 mr-2"></i>
          <span>${formatDate(task.dueDate)}</span>
        </div>`
          : ''
      }
      ${
        task.assignee
          ? `
        <div class="text-sm text-gray-500 dark:text-gray-400">
          <i class="far fa-user text-gray-400 dark:text-gray-500 mr-2"></i>
          <span>${task.assignee}</span>
        </div>`
          : ''
      }
    </div>
    <div class="flex justify-end space-x-2 mt-4">
      <button class="edit-task p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button class="delete-task p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all">
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
  let currentBoardIndex = null;

  closeEditBoardModal.addEventListener('click', hideEditBoardModal);
  cancelEditBoard.addEventListener('click', hideEditBoardModal);

  clearBoardBtn.addEventListener('click', () => {
    if (
      confirm('Clear all tasks in this board?') &&
      currentBoardIndex !== null
    ) {
      tasks = tasks.filter(task => task.column !== currentBoardIndex);
      saveTasks();
      renderAllTasks();
      hideEditBoardModal();
    }
  });

  function hideEditBoardModal() {
    editBoardModal.classList.add('hidden');
    editBoardModal.classList.remove('flex');
  }

  function rgbToHex(rgb) {
    if (!rgb) return '#6366f1';
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues) return '#6366f1';
    return (
      '#' +
      rgbValues.map(x => parseInt(x).toString(16).padStart(2, '0')).join('')
    );
  }

  function renderBoards() {
    const boardsContainer = document.querySelector('main div.flex.flex-nowrap');
    boardsContainer.innerHTML = '';

    boards.forEach((board, index) => {
      const boardElement = document.createElement('div');
      boardElement.className =
        'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col min-w-[320px] flex-shrink-0 h-full';

      boardElement.innerHTML = `
      <div style="background:${board.color}" class="text-white p-3 flex justify-between items-center flex-shrink-0">
        <h3 class="font-semibold text-sm md:text-base">${board.title}</h3>
        <div class="flex space-x-1">
          <button class="edit-board-btn text-white hover:bg-white/20 p-1 rounded transition-colors"><i class="fas fa-pencil-alt text-sm"></i></button>
          <button class="delete-board-btn text-white hover:bg-white/20 p-1 rounded transition-colors"><i class="fas fa-trash text-sm"></i></button>
        </div>
      </div>
      <div class="task-list bg-gray-50 dark:bg-gray-700 flex-grow p-3 overflow-y-auto space-y-3 h-full"></div>
      <div class="flex-shrink-0 p-4"></div>
    `;

      const rgb = hexToRgb(board.color);
      const addTaskButton = document.createElement('button');
      addTaskButton.className =
        'add-task-btn w-full py-2 px-4 rounded-md border border-dashed transition-all flex items-center justify-center gap-2';
      addTaskButton.style.color = board.color;
      addTaskButton.style.borderColor = board.color;
      addTaskButton.style.backgroundColor = rgb
        ? `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`
        : 'rgba(99, 102, 241, 0.1)';
      addTaskButton.onmouseover = () => {
        addTaskButton.style.backgroundColor = board.color;
        addTaskButton.style.color = '#fff';
      };
      addTaskButton.onmouseleave = () => {
        addTaskButton.style.backgroundColor = rgb
          ? `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`
          : 'rgba(99, 102, 241, 0.1)';
        addTaskButton.style.color = board.color;
      };
      addTaskButton.innerHTML = '<i class="fas fa-plus text-sm"></i> Add Task';

      boardElement
        .querySelector('.flex-shrink-0.p-4')
        .appendChild(addTaskButton);
      boardsContainer.appendChild(boardElement);
    });

    // Add new board button...
    const addBoardBtn = document.createElement('button');
    addBoardBtn.id = 'add-new-board-btn';
    addBoardBtn.className =
      'min-w-[320px] h-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300';
    addBoardBtn.innerHTML =
      '<i class="fas fa-plus fa-2x mb-2"></i><span>Add New Board</span>';
    boardsContainer.appendChild(addBoardBtn);

    attachBoardEventListeners();

    taskLists = document.querySelectorAll('.task-list');

    taskLists.forEach(list => {
      list.addEventListener('dragover', handleDragOver);
      list.addEventListener('dragleave', handleDragLeave);
      list.addEventListener('drop', handleDrop);
    });
  }

  function attachBoardEventListeners() {
    document.querySelectorAll('.add-task-btn').forEach((btn, index) => {
      btn.onclick = () => {
        taskForm.dataset.targetColumn = index;
        taskForm.reset();
        delete taskForm.dataset.editTaskId;

        document.querySelector('#task-modal h3').textContent =
          `Add Task to ${boards[index].title}`;
        taskModal.classList.remove('hidden');
        taskModal.classList.add('flex');
      };
    });

    document.querySelectorAll('.delete-board-btn').forEach((btn, index) => {
      btn.onclick = () => {
        if (confirm('Delete this board and all its tasks?')) {
          boards.splice(index, 1);
          // Update task column indices
          tasks = tasks
            .filter(task => task.column !== index)
            .map(task => ({
              ...task,
              column: task.column > index ? task.column - 1 : task.column,
            }));
          saveBoards();
          saveTasks();
          renderBoards();
          renderAllTasks();
        }
      };
    });

    document.querySelectorAll('.edit-board-btn').forEach((btn, index) => {
      btn.onclick = e => {
        currentBoardElement = e.target.closest('.flex-col');
        currentBoardIndex = index;

        boardNameInput.value = boards[index].title;
        boardColorInput.value = boards[index].color;

        editBoardModal.classList.remove('hidden');
        editBoardModal.classList.add('flex');

        editBoardForm.onsubmit = event => {
          event.preventDefault();

          boards[index].title = boardNameInput.value;
          boards[index].color = boardColorInput.value;

          saveBoards();
          renderBoards();
          renderAllTasks();
          hideEditBoardModal();
        };
      };
    });

    document.getElementById('add-new-board-btn').onclick = () => {
      const title = prompt('Board Title?');
      if (!title) return;
      const color = prompt('Board HEX Color?', '#3b82f6');
      if (!/^#[0-9A-F]{6}$/i.test(color)) return alert('Invalid HEX color.');

      boards.push({title, color});
      saveBoards();
      renderBoards();
    };
  }
});
