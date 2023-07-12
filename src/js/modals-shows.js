import { blurEffectRemove } from "./blur-effect.js";
import { addToCartFromModals } from "./handles.js";
import { blurEffectAdd } from "./blur-effect.js";

export function showCart() {
  document.querySelector(".bxs-basket").addEventListener("click", () => {
    document.querySelector(".cart").classList.toggle("show__cart");
    document.querySelector(".modals").classList.remove("modals__hidden");

    blurEffectRemove();
  });
}

export function printModals(res) {
  const modalsHTML = document.querySelector(".modals");
  const productsHTML = document.querySelector(".products");

  productsHTML.addEventListener("click", (e) => {
    const id = Number(e.target.id);
    const found = res.products.find((product) => product.id === id);

    if (e.target.classList.contains("img__select")) {
      const { image, name, description, category, price, quantity } = found;

      let html = "";

      html += `
                <div class="modal">
                  <p class="close">X</p>
                  <img src="${image}" alt="${name}">
                  <p><b>${name} - ${category}</b></p>
                  <small>${description}</small>
                  <div class="price__modal">
                    <p><b>$${price}.00</b></p>
                    <small>Stock: ${quantity}</small>
                    ${
                      quantity
                        ? `<i class='bx bx-plus btn-add' id=${id}></i>`
                        : "<p class='sold__out__modal'>Sold Out</p>"
                    }
                  </div>
                </div>`;

      modalsHTML.innerHTML = html;

      modalsHTML.classList.add("modals__hidden");
      blurEffectAdd();
      document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".modals").classList.remove("modals__hidden");
        blurEffectRemove();
      });
    }
  });
  addToCartFromModals(res);
}
