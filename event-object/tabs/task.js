
const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((item) => {
  item.addEventListener('click', (event) => {
    let idxTab = tab.findIndex((value) => value.classList.contains('tab_active'));
    tab[idxTab].classList.remove('tab_active');
    item.classList.add('tab_active');
    let ind = tab.findIndex((value) => value.classList.contains('tab_active'));

    let idxTabContent = tabContent.findIndex((val) => val.classList.contains('tab__content_active'));
    tabContent[idxTabContent].classList.remove('tab__content_active');
    tabContent[ind].classList.add('tab__content_active');
  })
})

