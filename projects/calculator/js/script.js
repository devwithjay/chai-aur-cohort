const lightToggle = document.querySelector('.sun');
const darkToggle = document.querySelector('.moon');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);

lightToggle.addEventListener('click', () => {
  htmlElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light'); 
});

darkToggle.addEventListener('click', () => {
  htmlElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
});

let displayString = '0'

function appendNumber(number) {
  if (displayString === '0' && number !== '.') {
    displayString = number; 
  } else {
    displayString += number
  }
}

function updateDisplay() {
  document.querySelector('.current-op').textContent = displayString;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.button').forEach(button => {
    const value = button.textContent;
    
    if (!isNaN(value) || value === '.') {
      button.addEventListener('click', () => {
        appendNumber(value);
        updateDisplay();
      })
    }
  })
})