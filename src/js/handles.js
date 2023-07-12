import { printToCart } from "./ui.js";

import { printTotal } from "./ui.js";

export function addToCartFromProducts(res) {
  const productsHTML = document.querySelector(".products")
  
  productsHTML.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add")) {
      const id = Number(e.target.id);
      const unitProduct = res.products.find((product) => product.id === id);


      if (res.cart[unitProduct.id]) {
        if (res.cart[id].ammount === res.cart[id].quantity) {
          alert("no hay más en stock");
        } else {
          res.cart[id].ammount++;
          console.log(res.cart[id].ammount);

        }
      } else {
        res.cart[unitProduct.id] = {
          ...unitProduct,
          ammount: 1,
        };
      }
      localStorage.setItem("cart", JSON.stringify(res.cart));
      printToCart(res);
      printTotal(res);
    }
  });
}

export function handleProductsCart(res) {
  const cartProductsHTML = document.querySelector(".cart__products");

  cartProductsHTML.addEventListener("click", (e) => {
    const id = Number(e.target.parentElement.id);

    if (e.target.classList.contains("bx")) {
      if (e.target.classList.contains("bx-minus")) {
        if (res.cart[id].ammount === 1) {
          const response = confirm("ya no hay más");
          if (response) delete res.cart[id];
        } else {
          res.cart[id].ammount--;
        }
      }

      if (e.target.classList.contains("bx-plus")) {
        if (res.cart[id].ammount === res.cart[id].quantity) {
          alert("no hay más en stock");
        } else {
          res.cart[id].ammount++;
        }
      }

      if (e.target.classList.contains("bxs-trash")) {
        const response = confirm("ya no hay más");
        if (response) delete res.cart[id];
      }

      localStorage.setItem("cart", JSON.stringify(res.cart));
      printToCart(res);
      printTotal(res);
    }
  });
}

export function addToCartFromModals(res) {
  const modalsHTML = document.querySelector('.modals')

  modalsHTML.addEventListener('click', (e) => {
    const id = Number(e.target.id)
    const FoundProduct = res.products.find(product => product.id === id)
    if(e.target.classList.contains('btn-add')) {
      if(res.cart[FoundProduct.id]) {
        if(res.cart[id].ammount === res.cart[id].quantity) {
          alert("ya no hay nadita")
        } else {
          res.cart[FoundProduct.id].ammount++
        console.log(res.cart[FoundProduct.id].ammount);
        }
        
    } else {
      res.cart[FoundProduct.id] = {
        ...FoundProduct,
        ammount: 1
      }
      console.log(res.cart[FoundProduct.id].ammount);
    }
    localStorage.setItem('cart', JSON.stringify(res.cart))
    printToCart(res)
    printTotal(res)
  }
})
}
