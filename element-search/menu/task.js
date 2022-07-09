const menu__links = document.querySelectorAll('.menu__link');
//console.log(menu__links);
// console.log(menu__links.length);
const menu__item = document.querySelectorAll('.menu__item');

menu__links.forEach((item) => {
  item.addEventListener('click', (event) => {
//console.log(event);
//console.log(event.target);
    const parent = event.target.closest('.menu__item')
//console.log(parent);
    const menu_sub = parent.querySelector('.menu_sub');
// console.log(menu_sub);
      if(menu_sub) {
        event.preventDefault();
        menu_sub.classList.toggle('menu_active');
      }
      if(!parent) {
        menu_sub.classList.remove('menu_active');
      }
  })
})