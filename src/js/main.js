import { getProductsApi } from "./bd-Api.js";

import { printProducts } from "./ui.js";

import { printToCart } from "./ui.js";

import { printTotal } from "./ui.js";

import { addToCartFromProducts } from "./handles.js";

import { handleProductsCart } from "./handles.js";

import { showCart, ShowMennuResponsive } from "./show-cart-and-menu.js";

import { showMenu } from "./show-nav.js";

import { printExpandCards } from "./ui.js";

import { filterMixItUp, btnsActive } from "./filter-mixItUp.js";

import { printModals } from "./modals-shows.js";

import { darkMode } from "./dark-mode.js";

import { showAlertBuy } from "./show-alerts.js";

import { cursorNotAllowedImg } from "./cursor-img.js";

async function main() {
  const res = {
    products:
      JSON.parse(localStorage.getItem("products")) || (await getProductsApi()),
    cart: JSON.parse(localStorage.getItem("cart")) || {},
  };

  darkMode();
  printProducts(res);
  showCart();
  addToCartFromProducts(res);
  printToCart(res);
  handleProductsCart(res);
  printTotal(res);
  printExpandCards(res);
  filterMixItUp();
  printModals(res);
  showAlertBuy(res);
  ShowMennuResponsive();
  btnsActive()
  cursorNotAllowedImg()

  window.onscroll = () => {
    showMenu();
  };

  setTimeout(() => {
    const loaderHTML = document.querySelector("#loader");
    loaderHTML.classList.add("loader__hiden");
    document.body.classList.remove("hidden");
  }, 2000);

const btnUpOn = document.querySelector('.btn__up')

btnUpOn.addEventListener('click', () => window.scrollTo(0, 0))

const addBtnScroll = () => {
  if(window.scrollY < 150) {
    btnUpOn.classList.remove('btn__up__on')
  } else {
    btnUpOn.classList.add('btn__up__on')
  }
}
  

  

}

main();
