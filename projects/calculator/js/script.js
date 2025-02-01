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