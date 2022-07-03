const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
//console.log(clicker__counter)

function clickAction() {
  counter.textContent ++;
    if(counter.textContent % 2 != 0) {
      image.width = 250;
    } else {
      image.width = 200;
    }

    if(counter.textContent == 41) {
      counter.textContent = 1;
    }
}
image.onclick = clickAction;