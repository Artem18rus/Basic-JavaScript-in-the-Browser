const value = document.querySelectorAll('.hole');
console.log(value);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for(let index = 0; index < 9; index++) {
  value[index].onclick = function() {
    if(value[index].classList.contains('hole_has-mole')) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if(dead.textContent == 10) {
      dead.textContent = 0;
      lost.textContent = 0;
      alert('Вы выиграли');
      
    } else if(lost.textContent == 5) {
      dead.textContent = 0;
      lost.textContent = 0;
      alert('Вы проиграли');
    }
  }
}