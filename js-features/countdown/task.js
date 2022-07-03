/*
//Вариант 1
const timer = document.getElementById("timer");
timer.textContent = 40;
const report = function() {
  timer.textContent--;
    if(timer.textContent == 0) {
      clearInterval(tymerId);
      alert('Вы победили в конкурсе!');
    }
}
let tymerId = setInterval(report, 1000);
*/

//Вариант 2
const timer = document.getElementById("timer");
let hour = '00';
let min = '00';
let sec = 40;
timer.textContent = `${hour}:${min}:${sec}`;
const report = function() {
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor(sec / 60);
  let seconds = sec % 60;

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  timer.innerHTML = `${hours}:${minutes}:${seconds}`;
  sec--;

    if(sec == -1) {
      clearInterval(tymerId);
      alert('Вы победили в конкурсе!');
    }
}
let tymerId = setInterval(report, 1000);