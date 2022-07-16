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
          parent.classList.add('book_fs-big');
        } else if(index === 2) {
          parent.classList.add('book_fs-small');
        }
  })
})

const colorText = Array.from(document.querySelectorAll('.color'));
colorText.splice(3, 3);
colorText.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let idx = colorText.findIndex((item) => item.classList.contains('color_active'));
      colorText[idx].classList.remove('color_active');
      item.classList.add('color_active');
    let index = colorText.findIndex((item) => item.classList.contains('color_active'));
      const parent = item.closest('.book');
      parent.classList.remove('text_color_black');
      parent.classList.remove('text_color_gray');
      parent.classList.remove('text_color_whitesmoke');
        if(index === 0) {
          parent.classList.add('text_color_black');
        } else if(index === 1) {
          parent.classList.add('text_color_gray');
        } else {
          parent.classList.add('text_color_whitesmoke');
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
      const parent = item.closest('.book');
      parent.classList.remove('bg_color_black');
      parent.classList.remove('bg_color_gray');
      parent.classList.remove('bg_color_white');
        if(index === 0) {
          parent.classList.add('bg_color_black');
        } else if(index === 1) {
          parent.classList.add('bg_color_gray');
        } else {
          parent.classList.add('bg_color_white');
        }
  })
})