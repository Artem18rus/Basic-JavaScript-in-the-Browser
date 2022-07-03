const value = document.querySelectorAll('.hole');
//console.log(value);
const value2 = document.getElementsByClassName('hole hole_has-mole');
console.log(value2);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
//console.log(lost);

for(let index = 0; index < 9; index++) {
console.log(value[index]);
//console.log(dead.textContent++)

  value[index].onclick = function() {
    if(hole.classList.contains( 'hole_has-mole' )) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }
  }
}


  /*   function getHole(index) {
    console.log(document.getElementById(`hole${index}`));
  }
  getHole();

 value[index].onclick = function() {
    if(hole.className.includes('hole_has-mole')) {
      dead++;
    } else {
      lost++;
    }
  }*/