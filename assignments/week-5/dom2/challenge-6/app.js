const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');
const digitalClock = document.querySelector('.digital-clock');
const dateDisplay = document.querySelector('.date');
const clock = document.querySelector('.clock');

for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.className = 'number';
  number.style.setProperty('--rotation', `${i * 30}deg`);
  number.innerHTML = `<span>${i}</span>`;
  clock.appendChild(number);
}

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = ((minutes + seconds / 60) / 60) * 360;
  const hoursDeg = (((hours % 12) + minutes / 60) / 12) * 360;

  secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;

  digitalClock.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  dateDisplay.textContent = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}

updateClock();
setInterval(updateClock, 1000);
