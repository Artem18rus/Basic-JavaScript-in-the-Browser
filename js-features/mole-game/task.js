const value = document.querySelectorAll('.hole');
console.log(value);
//const value2 = document.getElementsByClassName('hole hole_has-mole');
//console.log(value2);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
//console.log(lost);

for(let index = 0; index < 9; index++) {
//console.log(value[index]);
//console.log(dead.textContent++)

  value[index].onclick = function() {
    //console.log(value[index].classList.contains('hole_has-mole'));
    if(value[index].classList.contains('hole_has-mole')) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if(dead.textContent == 10) {
      dead.textContent = 0;
      alert('Вы выиграли');
      
    } else if(lost.textContent == 5) {
      lost.textContent = 0;
      alert('Вы проиграли');
    }
  }
}