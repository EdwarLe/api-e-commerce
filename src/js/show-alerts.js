import { blurEffectAdd, blurEffectRemove } from "./blur-effect.js";
import { payButton } from "./pay-button.js";
import { printToCart, printTotal } from "./ui.js";

export function showAlertSoldOut() {
  const alertsHTML = document.querySelector(".alerts");
  const alertOutStockHTML = document.querySelector(".alert__out__stock");

  alertsHTML.classList.add("alerts__show");
  alertOutStockHTML.classList.add("alert__out__stock__show");
  blurEffectAdd();

  alertsHTML.addEventListener("click", (e) => {
    if (e.target.classList.contains("confirm__out")) {
      alertsHTML.classList.remove("alerts__show");
      alertOutStockHTML.classList.remove("alert__out__stock__show");

      blurEffectRemove();
    }

    if (
      !e.target.classList.contains("alert") &&
      !e.target.classList.contains("bx-x-circle") &&
      !e.target.classList.contains("alarm__out") &&
      !e.target.classList.contains("text__description__out")
    ) {
      alertOutStockHTML.classList.remove("alert__out__stock__show");
      alertsHTML.classList.remove("alerts__show");
      blurEffectRemove();
    }
  });
}

export function showAlertBuy(res) {

  document.querySelector(".btn__buy").addEventListener("click", () => {
    if (!Object.entries(res.cart).length) {
      showAlertNotBuy();
    } else {
      const alertsHTML = document.querySelector(".alerts");
      const alertBuyHTML = document.querySelector(".alert__buy");

      alertsHTML.classList.add("alerts__show");
      alertBuyHTML.classList.add("alert__buy__show");

      blurEffectAdd();

      alertsHTML.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn__confirm__buy")) {
          alertsHTML.classList.remove("alerts__show");
          alertBuyHTML.classList.remove("alert__buy__show");

          blurEffectRemove();

          payButton(res);
        }

        if (
          !e.target.classList.contains("alert") &&
          !e.target.classList.contains("bx-check-circle") &&
          !e.target.classList.contains("alarm__buy") &&
          !e.target.classList.contains("text__description__buy")
        ) {
          alertsHTML.classList.remove("alerts__show");

          alertBuyHTML.classList.remove("alert__buy__show");

          blurEffectRemove();
        }
      });
    }
  });
}

export function showAlertDelete(res, id) {
  const alertsHTML = document.querySelector(".alerts");
  const alertDeletekHTML = document.querySelector(".alert__delete");

  alertsHTML.classList.add("alerts__show");
  alertDeletekHTML.classList.add("alert__delete__show");
  blurEffectAdd();

  alertsHTML.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      alertsHTML.classList.remove("alerts__show");
      alertDeletekHTML.classList.remove("alert__delete__show");

      blurEffectRemove();

      delete res.cart[id];
    }

    if (
      !e.target.classList.contains("alert") &&
      !e.target.classList.contains("bx-x-circle") &&
      !e.target.classList.contains("alarm__dlt") &&
      !e.target.classList.contains("text__description__dlt")
    ) {
      alertDeletekHTML.classList.remove("alert__delete__show");
      alertsHTML.classList.remove("alerts__show");
      blurEffectRemove();
    }

    localStorage.setItem("cart", JSON.stringify(res.cart));
    printToCart(res);
    printTotal(res);
  });
}

export function showAlertNotBuy() {
  const alertsHTML = document.querySelector(".alerts");
  const alertNotBuyHTML = document.querySelector(".alert__not__buy");

  alertsHTML.classList.add("alerts__show");
  alertNotBuyHTML.classList.add("alert__not__buy__show");
  blurEffectAdd();

  alertsHTML.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__confirm__not__buy")) {
      alertsHTML.classList.remove("alerts__show");
      alertNotBuyHTML.classList.remove("alert__not__buy__show");

      blurEffectRemove();
    }

    if (
      !e.target.classList.contains("alert__not__buy") &&
      !e.target.classList.contains("bx-x-circle") &&
      !e.target.classList.contains("alarm__not__buy") &&
      !e.target.classList.contains("text__description__not__buy")
    ) {
      alertNotBuyHTML.classList.remove("alert__not__buy__show");
      alertsHTML.classList.remove("alerts__show");
      blurEffectRemove();
    }
  });
}
