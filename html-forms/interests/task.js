
const interestCheck = Array.from(document.querySelectorAll('.interest__check'));
console.log(interestCheck);

interestCheck.forEach((item) => {
  item.addEventListener('change', () => {

    if(interestCheck[0].checked === true) {
      interestCheck[1].checked = true;
      interestCheck[2].checked = true;
    } else {
      interestCheck[1].checked = false;
      interestCheck[2].checked = false;
    }

    if(interestCheck[3].checked === true) {
      interestCheck[4].checked = true;
      interestCheck[5].checked = true;
    }else {
      interestCheck[4].checked = false;
      interestCheck[5].checked = false;
    }
  })
})