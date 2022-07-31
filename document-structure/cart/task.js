const productQuantityControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productQuantityControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let productQuantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));

productQuantityControlDec.forEach((item, idx) => {
  item.addEventListener('click', (event) => {
    productQuantityValue[idx].textContent == 1 ? false : productQuantityValue[idx].textContent--;
  })
})

productQuantityControlInc.forEach((item, idx) => {
  item.addEventListener('click', (event) => {
    productQuantityValue[idx].textContent++;
  })
})

const productAdd = Array.from(document.querySelectorAll('.product__add'));
let cartProducts = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const productImage = document.querySelectorAll('.product__image');

productAdd.forEach((item, idx) => {
  item.addEventListener('click', (event) => {

    let dataId = (product[idx].getAttribute('data-id'));
    let parent = productImage[idx].closest('.product');
    let parental = parent.querySelector('.product__image')
    let imgNeed = parental.getAttribute('src');

    let meaning = Number(productQuantityValue[idx].outerText);

    let cartProduct = Array.from(document.querySelectorAll('.cart__product'));
    let coincidence = cartProduct.find(el => el.dataset.id == event.target.closest('.product').dataset.id);
      if(!coincidence) {
        cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id=${dataId}>
          <img class="cart__product-image" src=${imgNeed}>
          <div class="cart__product-count">${meaning}</div>
        </div>
        `);
      } else {
        let cartProductCount = coincidence.querySelector('.cart__product-count');
        console.log(cartProductCount);
        cartProductCount.innerText = +cartProductCount.outerText + meaning;
      }
  })
})