const menuLinks = document.querySelectorAll('.menu__link');
const menuItems = document.querySelectorAll('.menu__item');

menuLinks.forEach((item) => {
  item.addEventListener('click', (event) => {
    const parent = event.target.closest('.menu__item');
    const menuSub = parent.querySelector('.menu_sub');
      if(menuSub) {
        event.preventDefault();
        menuSub.classList.toggle('menu_active');
      }
      if(!parent) {
        menuSub.classList.remove('menu_active');
      }
  })
})