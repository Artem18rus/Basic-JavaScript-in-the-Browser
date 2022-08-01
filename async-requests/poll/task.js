let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.addEventListener('readystatechange', (event) => {
  if(xhr.readyState === xhr.DONE && xhr.status === 200) {
    const poll = document.querySelector('.poll')
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    let object = JSON.parse(xhr.response);
    pollTitle.innerText = object.data.title;

    const arr = object.data.answers;
      for(let i = 0; i < arr.length; i++) {
      pollAnswers.insertAdjacentHTML('beforeend', `
        <button class="poll__answer">
          ${arr[i]}
        </button>
      `);
      }

    const pollAnswer = Array.from(document.querySelectorAll('.poll__answer'));
    pollAnswer.forEach((item, idx) => {
      item.onclick = function() {
        alert ('Спасибо Ваш голос засчитан!');
      }
    })
  }
})
xhr.send();