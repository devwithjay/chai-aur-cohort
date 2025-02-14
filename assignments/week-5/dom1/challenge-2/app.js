const mainHeading = document.querySelector('#mainHeading');
const redButton = document.querySelector('#redButton');
const blueButton = document.querySelector('#blueButton');
const greenButton = document.querySelector('#greenButton');
const purpleButton = document.querySelector('#purpleButton');
const resetButton = document.querySelector('#resetButton');

redButton.addEventListener('click', () => {
  mainHeading.style.color = 'red';
});

blueButton.addEventListener('click', () => {
  mainHeading.style.color = 'blue';
});

greenButton.addEventListener('click', () => {
  mainHeading.style.color = 'green';
});

purpleButton.addEventListener('click', () => {
  mainHeading.style.color = 'purple';
});

resetButton.addEventListener('click', () => {
  mainHeading.style.color = 'black';
});
