const activeIndex = 0;

const slider__items = document.querySelectorAll('.slider__items');
//console.log(slider__items);

const slider__item_active = document.querySelector('.slider__item_active');
//console.log(slider__item_active);


const slider__item = Array.from(document.querySelectorAll('.slider__item'));
//console.log(slider__item);

const slider__arrow = document.querySelectorAll('.slider__arrow');
//console.log(slider__arrow);

const slider__arrow_prev = document.querySelector('.slider__arrow_prev');
//console.log(slider__arrow_prev);

const slider__arrow_next = document.querySelector('.slider__arrow_next');
//console.log(slider__arrow_next);

slider__arrow.forEach((item) => {
  item.addEventListener('click', (event) => {
    //slider__item_active.classList.toggle('slider__item_active');
    // console.log(activeIndex);
    // console.log(item.classList.contains('slider__arrow_prev'));      
    if(item.classList.contains('slider__arrow_prev')) {
      console.log(slider__item); 
      const activeIndex = slider__item.findIndex((value, idx) => value.classList.contains('slider__item_active'));
      console.log(activeIndex);
      activeIndex++;
    }
  })
})
