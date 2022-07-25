
const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener('change', () => {
  const headTarget = event.target.closest('.interest');
  const children = headTarget.querySelectorAll('.interests');
  const parent = headTarget.querySelector('.interest__check');

  children.forEach(item => {
  const checkBox = item.querySelectorAll('.interest__check');
  console.log(checkBox);
    for(let i = 0; i < checkBox.length; i++) {
      if (parent.checked) {
        checkBox[i].checked = true;
      } else {
        checkBox[i].checked = false;
      }
    }
  });
});