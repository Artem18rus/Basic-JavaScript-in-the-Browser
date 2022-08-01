let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.addEventListener('readystatechange', (event) => {
  if(xhr.readyState === xhr.DONE) {
    const loader = document.querySelector('.loader');
    loader.classList.remove('loader_active');
    const items = document.getElementById('items');
    
    let object = JSON.parse(xhr.response).response.Valute;
    for (let key in object) {
      items.insertAdjacentHTML('beforeend', `
        <div class="item">
        <div class="item__code">
                ${object[key].CharCode}
            </div>
            <div class="item__value">
                ${object[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `);
    }
  }
})
xhr.send();