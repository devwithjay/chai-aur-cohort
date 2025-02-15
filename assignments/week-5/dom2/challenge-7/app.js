const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;

    const isActive = accordionItem.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
      const content = item.querySelector('.accordion-content');
      content.style.maxHeight = '0';
    });

    if (!isActive) {
      accordionItem.classList.add('active');
      const content = accordionItem.querySelector('.accordion-content');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const firstItem = document.querySelector('.accordion-item');
  if (firstItem) {
    firstItem.classList.add('active');
    const content = firstItem.querySelector('.accordion-content');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});
