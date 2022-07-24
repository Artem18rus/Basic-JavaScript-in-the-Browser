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

    let meaning = productQuantityValue[idx].outerText;

    cartProducts.innerHTML+=`
    <div class="cart__product" data-id=${dataId}>
      <img class="cart__product-image" src=${imgNeed}>
      <div class="cart__product-count">${meaning}</div>
    </div>`;
    
    // let cartProduct = Array.from(document.querySelectorAll('.cart__product'));
    //   // for(let i = 0; i < cartProduct.length; i++) {
    //   //   if(cartProduct[i].getAttribute('data-id') == dataId) {

    //   // }
  })
})















































// productAdd.forEach((item, idx) => {
//   item.addEventListener('click', (event) => {
//     let cartProduct = Array.from(document.querySelectorAll('.cart__product'));
//     //console.log(cartProduct)

//       let dataId = (product[idx].getAttribute('data-id'));
//       //console.log(dataId)

//       let parent = productImage[idx].closest('.product');
//       let parental = parent.querySelector('.product__image')
//       let imgNeed = parental.getAttribute('src');

//       let meaning = productQuantityValue[idx].outerText;
//       // console.log(productQuantityValue[idx])
//       // console.log(meaning)

//       cartProducts.innerHTML+=`
//       <div class="cart__product" data-id=${dataId}>
//         <img class="cart__product-image" src=${imgNeed}>
//         <div class="cart__product-count">${meaning}</div>
//       </div>`;
//       }
//       // for(let i = 0; i < cartProduct.length; i++) {
//       //   //console.log(cartProduct[i])
//       //   console.log(cartProduct[i].getAttribute('data-id'));
//       //   //console.log(dataId);
//       //   // if(cartProduct[i].getAttribute('data-id') == dataId) {
//       //   //   console.log('sdfsdf')
//       //   // }
//       // }


//     //let repeatValue = cartProduct.find((val, i) => val == cartProduct.);
//   })
// })