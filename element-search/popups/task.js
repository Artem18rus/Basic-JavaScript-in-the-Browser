const modal_main = document.querySelector('#modal_main');
modal_main.style.display = 'flex';

const modal_active = document.querySelector('.modal_active');
modal_active.style.display = 'none';

const modal__close = document.querySelectorAll('.modal__close');
//console.log(modal__close);

for(let i = 0; i < modal__close.length; i++) {
  if(i == 1) continue;
  modal__close[i].onclick = function() {
    modal_main.style.display = 'none';
    modal_success.style.display = 'none';
  }  
}

const modal_success = document.querySelector('#modal_success');
//console.log(modal_success);
const show_success = document.querySelector('.show-success');

show_success.onclick = function() {
 	modal_success.style.display = 'flex';
}

