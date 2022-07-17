const fontSize = Array.from(document.querySelectorAll('.font-size'));
fontSize.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let idx = fontSize.findIndex((item) => item.classList.contains('font-size_active'));
      fontSize[idx].classList.remove('font-size_active');
      item.classList.add('font-size_active');
    let index = fontSize.findIndex((item) => item.classList.contains('font-size_active'));
      const parent = item.closest('.book');
      parent.classList.remove('book_fs-big');
      parent.classList.remove('book_fs-small');
        if(index === 0) {
          parent.classList.add('book_fs-small');
        } else if(index === 2) {
          parent.classList.add('book_fs-big');
        }
  })
})

const colorText = Array.from(document.querySelectorAll('.color'));
colorText.splice(3, 3);

const bookContent = document.querySelector('.book__content');
console.log(bookContent);


colorText.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let idx = colorText.findIndex((item) => item.classList.contains('color_active'));
      colorText[idx].classList.remove('color_active');
      item.classList.add('color_active');
    let index = colorText.findIndex((item) => item.classList.contains('color_active'));
        if(index === 0) {
          bookContent.style.color = '#000'
        } else if(index === 1) {
          bookContent.style.color = 'grey'
        } else {
          bookContent.style.color = 'whitesmoke'
        }
  })
})

const colorBg = Array.from(document.querySelectorAll('.color'));
colorBg.splice(0, 3);
colorBg.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let idx = colorBg.findIndex((item) => item.classList.contains('color_active'));
      colorBg[idx].classList.remove('color_active');
      item.classList.add('color_active');
    let index = colorBg.findIndex((item) => item.classList.contains('color_active'));
        if(index === 0) {
          bookContent.style.background = '#000'
        } else if(index === 1) {
          bookContent.style.background = 'grey'
        } else {
          bookContent.style.background = 'whitesmoke'
        }
  })
})