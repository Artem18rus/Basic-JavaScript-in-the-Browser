const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrow = document.querySelectorAll('.slider__arrow');
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

sliderArrow.forEach((item) => {
  item.addEventListener('click', (event) => {
    if(item.classList.contains('slider__arrow_prev')) {
      let activeIndex = sliderItem.findIndex((value) => value.classList.contains('slider__item_active'));
        sliderItem[activeIndex].classList.remove('slider__item_active');
        activeIndex = (activeIndex == 0) ? (sliderItem.length - 1) : (activeIndex - 1);
        sliderItem[activeIndex].classList.add('slider__item_active');
    } else {
      let activeIndex = sliderItem.findIndex((value) => value.classList.contains('slider__item_active'));
        sliderItem[activeIndex].classList.remove('slider__item_active');
        activeIndex = (activeIndex == sliderItem.length - 1) ? 0 : (activeIndex + 1);
        sliderItem[activeIndex].classList.add('slider__item_active');
    }
  })
})