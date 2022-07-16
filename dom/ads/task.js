const rotatorСase = Array.from(document.querySelectorAll('.rotator__case'));

let timerId = setInterval(() => {
  let index = rotatorСase.findIndex((value) => value.classList.contains('rotator__case_active'));
    if(rotatorСase[index].classList.contains('rotator__case_active'))
      rotatorСase[index].classList.remove('rotator__case_active');
        if(index == rotatorСase.length-1) {
          rotatorСase[0].classList.add('rotator__case_active');
        } else {
         rotatorСase[index].nextElementSibling.classList.add('rotator__case_active');
        }
}, 1000);

document.addEventListener('keydown', (event) => {
  if(event.key == 't') {
    clearInterval(timerId);
  }
})

// console.log(rotatorСase[1].getAttribute("data-color"));
// console.log(rotatorСase[1].dataset.color)// "значение"
// console.log(Array.from(rotatorСase[0].attributes));
// console.log(rotatorСase[0].dataset.speed)// "значение"
// console.log(rotatorСase[0].dataset)

// const v = rotatorСase[0];
// v.dataset.speed;
// v.dataset.color;