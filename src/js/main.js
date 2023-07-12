import { getProductsApi } from "./bd-Api.js";

import { printProducts } from "./ui.js";

import { printToCart } from "./ui.js";

import { printTotal } from "./ui.js";

import { payButton } from "./pay-button.js";

import { addToCartFromModals, addToCartFromProducts } from "./handles.js";

import { handleProductsCart } from "./handles.js";

import { showCart } from "./modals-shows.js";

import { showMenu } from "./show-nav.js";

import { printExpandCards } from "./ui.js";

import { filterMixItUp } from "./filter-mixItUp.js";

import { printModals } from "./modals-shows.js";

import { darkMode } from "./dark-mode.js";

import { showAlertBuy } from "./show-alerts.js";

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
  payButton(res);
  printExpandCards(res);
  filterMixItUp();
  printModals(res);
  showAlertBuy(res)

  window.onscroll = () => {
    showMenu();
  };

  setTimeout(() => {
    const loaderHTML = document.querySelector("#loader");
    loaderHTML.classList.add("loader__hiden");
    document.body.classList.remove("hidden");
  }, 100);

  document.querySelector(".bx-menu-alt-right").addEventListener("click", () => {
    document
      .querySelector(".menu__responsive")
      .classList.toggle("hidden__menu");
  });


}

main();
