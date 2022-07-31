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
    const dataId = (product[idx].getAttribute('data-id'));
    const parent = productImage[idx].closest('.product');
    const parental = parent.querySelector('.product__image')
    const imgNeed = parental.getAttribute('src');
    const meaning = Number(productQuantityValue[idx].outerText);

    const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
    const coincidence = cartProduct.find(el => el.dataset.id == event.target.closest('.product').dataset.id);
      if(!coincidence) {
        cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id=${dataId}>
          <img class="cart__product-image" src=${imgNeed}>
          <div class="cart__product-count">${meaning}</div>
        </div>
        `);
      } else {
        const cartProductCount = coincidence.querySelector('.cart__product-count');
        cartProductCount.innerText = +cartProductCount.outerText + meaning;
      }
  })
})