import { printToCart } from "./ui.js";

import { printTotal } from "./ui.js";

import { showAlertSoldOut, showAlertDelete } from "./show-alerts.js";

import { blurEffectRemove } from "./blur-effect.js";

export function addToCartFromProducts(res) {
  const productsHTML = document.querySelector(".products");

  productsHTML.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add")) {
      const id = Number(e.target.id);
      const unitProduct = res.products.find((product) => product.id === id);

      if (res.cart[unitProduct.id]) {
        if (res.cart[id].ammount === res.cart[id].quantity) {
          showAlertSoldOut();
        } else {
          res.cart[id].ammount++;
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
          showAlertDelete(res, id);
        } else {
          res.cart[id].ammount--;
        }
      }

      if (e.target.classList.contains("bx-plus")) {
        if (res.cart[id].ammount === res.cart[id].quantity) {
          showAlertSoldOut();
        } else {
          res.cart[id].ammount++;
        }
      }

      if (e.target.classList.contains("bxs-trash")) {
        showAlertDelete(res, id);
      }
      localStorage.setItem("cart", JSON.stringify(res.cart));
      printToCart(res);
      printTotal(res);
    }
  });
}

export function addToCartFromModals(res) {
  const modalsHTML = document.querySelector(".modals");

  modalsHTML.addEventListener("click", (e) => {
    const id = Number(e.target.id);
    const FoundProduct = res.products.find((product) => product.id === id);
    if (e.target.classList.contains("btn-add")) {
      if (res.cart[FoundProduct.id]) {
        if (res.cart[id].ammount === res.cart[id].quantity) {
          showAlertSoldOut();
          document.querySelector(".modals").classList.remove("modals__hidden");
        } else {
          res.cart[FoundProduct.id].ammount++;
        }
      } else {
        res.cart[FoundProduct.id] = {
          ...FoundProduct,
          ammount: 1,
        };
        
      }
      localStorage.setItem("cart", JSON.stringify(res.cart));
      printToCart(res);
      printTotal(res);
    }
  });
}
