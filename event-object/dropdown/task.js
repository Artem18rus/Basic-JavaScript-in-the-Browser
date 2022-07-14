const dropdownList = document.querySelector('.dropdown__list');
dropdownList.classList.add('dropdown__list_active');

let dropdownValue = document.querySelector('.dropdown__value');
dropdownValue.addEventListener('click', (event) => {
  dropdownList.classList.toggle('dropdown__list_active');
});

const dropdownItem = document.querySelectorAll('.dropdown__item');
dropdownItem.forEach((item) => {  
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const parent = event.target.closest('.dropdown__list');
      if(parent.classList.contains('dropdown__list_active')) {
        parent.classList.remove('dropdown__list_active');
        dropdownValue.textContent = item.textContent;
      }
  })
})


