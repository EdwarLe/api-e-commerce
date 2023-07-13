import { blurEffectRemove } from "./blur-effect.js";

export function ShowMennuResponsive() {
  document.querySelector(".bx-menu-alt-right").addEventListener("click", () => {
    document
      .querySelector(".menu__responsive")
      .classList.toggle("hidden__menu");
  });
}

export function showCart() {
  document.querySelector(".bxs-basket").addEventListener("click", () => {
    document.querySelector(".cart").classList.toggle("show__cart");
    document.querySelector(".modals").classList.remove("modals__hidden");

    blurEffectRemove();
  });
}
