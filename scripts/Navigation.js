const menu = document.querySelector('.menu__container');
const navigationItems = document.querySelector('.hero__nav-items');

menu.addEventListener('click', () => {
  navigationItems.classList.toggle('nav-active');
});