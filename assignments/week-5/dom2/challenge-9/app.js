const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const panel = document.querySelector('.panel');
const menuItems = document.querySelectorAll('.menu-item');
const body = document.body;

function openMenu() {
  panel.classList.add('active');
  body.style.overflow = 'hidden'; 
}

function closeMenu() {
  panel.classList.remove('active');
  body.style.overflow = ''; 
}

toggleBtn.addEventListener('click', openMenu);

closeBtn.addEventListener('click', closeMenu);

document.addEventListener('click', e => {
  if (
    panel.classList.contains('active') &&
    !panel.contains(e.target) &&
    e.target !== toggleBtn
  ) {
    closeMenu();
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked on ${item.textContent}`);
    closeMenu();
  });
});
