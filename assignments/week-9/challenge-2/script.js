const moodEmojis = {
  happy: '😊',
  sad: '😢',
  neutral: '😐',
  excited: '🤩',
  tired: '😴',
  anxious: '😰',
  angry: '😡',
  grateful: '🙏',
  relaxed: '😌',
  frustrated: '😤',
};

const moodSelector = document.getElementById('moodSelector');
const moodNote = document.getElementById('moodNote');
const saveButton = document.getElementById('saveButton');
const todayMood = document.getElementById('todayMood');
const todayEmoji = document.getElementById('todayEmoji');
const todayNote = document.getElementById('todayNote');
const timelineView = document.getElementById('timelineView');
const calendarContainer = document.getElementById('calendarContainer');
const commonMoodEmoji = document.getElementById('commonMoodEmoji');
const commonMoodName = document.getElementById('commonMoodName');
const moodDistribution = document.getElementById('moodDistribution');

const dayViewBtn = document.getElementById('dayView');
const weekViewBtn = document.getElementById('weekView');
const monthViewBtn = document.getElementById('monthView');
const calendarViewBtn = document.getElementById('calendarView');

const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const currentMonthDisplay = document.getElementById('currentMonthDisplay');
const calendarGrid = document.getElementById('calendarGrid');

let selectedMood = null;
let currentView = 'day';
let currentDate = new Date();
let displayMonth = new Date();

function init() {
  checkTodayMood();
  loadMoodData();
  renderTimeline();
  updateStatistics();
  setupEventListeners();
}

function setupEventListeners() {
  moodSelector.addEventListener('click', e => {
    const btn = e.target.closest('.emoji-btn');
    if (!btn) return;

    document
      .querySelectorAll('.emoji-btn')
      .forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedMood = btn.getAttribute('data-mood');
  });

  saveButton.addEventListener('click', saveMood);

  dayViewBtn.addEventListener('click', () => setView('day'));
  weekViewBtn.addEventListener('click', () => setView('week'));
  monthViewBtn.addEventListener('click', () => setView('month'));
  calendarViewBtn.addEventListener('click', () => setView('calendar'));

  prevMonthBtn.addEventListener('click', () => {
    displayMonth.setMonth(displayMonth.getMonth() - 1);
    renderCalendar();
  });

  nextMonthBtn.addEventListener('click', () => {
    displayMonth.setMonth(displayMonth.getMonth() + 1);
    renderCalendar();
  });
}

function checkTodayMood() {
  const today = new Date().toISOString().split('T')[0];
  const moodData = getMoodData();

  if (moodData[today]) {
    todayMood.classList.remove('hidden');
    todayEmoji.textContent = moodEmojis[moodData[today].mood];
    todayNote.textContent = moodData[today].note || '';
  } else {
    todayMood.classList.add('hidden');
  }
}

function saveMood() {
  if (!selectedMood) {
    alert('Please select a mood first');
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  const note = moodNote.value.trim();
  const moodData = getMoodData();

  moodData[today] = {
    mood: selectedMood,
    note: note,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem('moodData', JSON.stringify(moodData));

  document
    .querySelectorAll('.emoji-btn')
    .forEach(b => b.classList.remove('selected'));
  moodNote.value = '';
  selectedMood = null;

  checkTodayMood();
  loadMoodData();
  renderTimeline();
  updateStatistics();
}

function getMoodData() {
  const data = localStorage.getItem('moodData');
  return data ? JSON.parse(data) : {};
}

function loadMoodData() {
  const moodData = getMoodData();
}

function setView(view) {
  currentView = view;

  [dayViewBtn, weekViewBtn, monthViewBtn, calendarViewBtn].forEach(btn => {
    btn.classList.remove('bg-rose-600', 'text-white');
    btn.classList.add('bg-gray-200', 'text-gray-700');
  });

  if (view === 'calendar') {
    calendarViewBtn.classList.remove('bg-gray-200', 'text-gray-700');
    calendarViewBtn.classList.add('bg-rose-600', 'text-white');
    timelineView.classList.add('hidden');
    calendarContainer.classList.remove('hidden');
    renderCalendar();
  } else {
    const activeBtn =
      view === 'day'
        ? dayViewBtn
        : view === 'week'
          ? weekViewBtn
          : monthViewBtn;
    activeBtn.classList.remove('bg-gray-200', 'text-gray-700');
    activeBtn.classList.add('bg-rose-600', 'text-white');

    timelineView.classList.remove('hidden');
    calendarContainer.classList.add('hidden');
    renderTimeline();
  }
}

function renderTimeline() {
  const moodData = getMoodData();
  let timelineHTML = '';

  if (Object.keys(moodData).length === 0) {
    timelineView.innerHTML =
      '<p class="text-center text-gray-500 py-8">No mood data recorded yet. Start by logging your mood today!</p>';
    return;
  }

  const sortedDates = Object.keys(moodData).sort(
    (a, b) => new Date(b) - new Date(a),
  );

  let filteredDates = sortedDates;

  if (currentView === 'day') {
    filteredDates = sortedDates.slice(0, 7);
  } else if (currentView === 'week') {
    filteredDates = sortedDates.slice(0, 28);
  }

  timelineHTML = '<div class="space-y-4">';

  filteredDates.forEach(date => {
    const entry = moodData[date];
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    timelineHTML += `
          <div class="flex items-start p-3 bg-rose-50 rounded-lg">
            <div class="text-3xl mr-4">${moodEmojis[entry.mood]}</div>
            <div class="flex-1">
              <div class="font-medium">${formattedDate}</div>
              <div class="text-gray-600">${entry.note || 'No note'}</div>
            </div>
          </div>
        `;
  });

  timelineHTML += '</div>';
  timelineView.innerHTML = timelineHTML;
}

function renderCalendar() {
  const moodData = getMoodData();

  currentMonthDisplay.textContent = displayMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const firstDay = new Date(
    displayMonth.getFullYear(),
    displayMonth.getMonth(),
    1,
  );
  const lastDay = new Date(
    displayMonth.getFullYear(),
    displayMonth.getMonth() + 1,
    0,
  );
  const daysInMonth = lastDay.getDate();

  const firstDayOfWeek = firstDay.getDay();

  let calendarHTML = '';

  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarHTML += `<div class="calendar-day bg-gray-100 rounded"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(
      displayMonth.getFullYear(),
      displayMonth.getMonth(),
      day,
    );
    const dateStr = date.toISOString().split('T')[0];
    const hasEntry = moodData[dateStr];

    let dayHTML = `<div class="calendar-day flex flex-col items-center justify-center rounded ${hasEntry ? 'bg-rose-50' : 'bg-white'} border">
          <div class="text-sm">${day}</div>`;

    if (hasEntry) {
      dayHTML += `<div class="text-xl">${moodEmojis[moodData[dateStr].mood]}</div>`;
    }

    dayHTML += `</div>`;
    calendarHTML += dayHTML;
  }

  calendarGrid.innerHTML = calendarHTML;
}

function updateStatistics() {
  const moodData = getMoodData();
  const entries = Object.values(moodData);

  if (entries.length === 0) {
    commonMoodEmoji.textContent = '-';
    commonMoodName.textContent = 'Not enough data';
    moodDistribution.innerHTML =
      '<p class="text-gray-500">Log your moods to see statistics</p>';
    return;
  }

  const moodCounts = {};
  entries.forEach(entry => {
    moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1;
  });

  let maxCount = 0;
  let commonMood = '';
  Object.keys(moodCounts).forEach(mood => {
    if (moodCounts[mood] > maxCount) {
      maxCount = moodCounts[mood];
      commonMood = mood;
    }
  });

  commonMoodEmoji.textContent = moodEmojis[commonMood];
  commonMoodName.textContent =
    commonMood.charAt(0).toUpperCase() + commonMood.slice(1);

  let distributionHTML = '';
  const totalEntries = entries.length;

  Object.keys(moodEmojis).forEach(mood => {
    const count = moodCounts[mood] || 0;
    const percentage = Math.round((count / totalEntries) * 100);

    distributionHTML += `
          <div class="flex flex-col items-center">
            <div class="text-xl">${moodEmojis[mood]}</div>
            <div class="h-32 w-6 bg-gray-200 rounded-t relative mt-2">
              <div class="absolute bottom-0 left-0 right-0 bg-rose-500 rounded-t" style="height: ${percentage}%"></div>
            </div>
            <div class="text-sm mt-1">${percentage}%</div>
          </div>
        `;
  });

  moodDistribution.innerHTML = distributionHTML;
}

document.addEventListener('DOMContentLoaded', init);
