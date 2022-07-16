const reveal = document.querySelectorAll('.reveal');

setInterval(() =>
reveal.forEach((item) => {
  if(window.innerHeight > item.getBoundingClientRect().top) {
    item.classList.add('reveal_active');
  }
}), 100);