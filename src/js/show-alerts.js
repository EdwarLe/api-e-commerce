import { blurEffectAdd, blurEffectRemove } from "./blur-effect.js";
import { payButton } from "./pay-button.js";

export function showAlertSoldOut() {
  const alertsHTML = document.querySelector(".alerts");
  const alertOutStockHTML = document.querySelector(".alert__out__stock");
  const alarmOutHTML = document.querySelector(".alarm__out");
  const confirmOutHTML = document.querySelector(".confirm");
  const textDescriptionOutHTML = document.querySelector(
    ".text__description__out"
  );

 

  alertsHTML.classList.add("alerts__show");
  alertOutStockHTML.classList.add("alert__out__stock__show");
  blurEffectAdd();

  alertsHTML.addEventListener("click", (e) => {
    if (e.target.classList.contains("confirm")) {
      alertsHTML.classList.remove("alerts__show");
      alertOutStockHTML.classList.remove("alert__out__stock__show");

      blurEffectRemove();
    }

    if (
      !e.target.classList.contains("alert") &&
      !e.target.classList.contains("bx-x-circle") &&
      !e.target.classList.contains("alarm") &&
      !e.target.classList.contains("text__description")
    ) {
      alertOutStockHTML.classList.remove("alert__out__stock__show");
      alertsHTML.classList.remove("alerts__show");
      blurEffectRemove();
    }
  });
}

export function showAlertBuy(res) {
  document.querySelector(".btn__buy").addEventListener("click", () => {
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
        !e.target.classList.contains("bx-x-circle") &&
        !e.target.classList.contains("alarm") &&
        !e.target.classList.contains("text__description")
      ) {
        alertsHTML.classList.remove("alerts__show");

        alertBuyHTML.classList.remove("alert__buy__show");

        blurEffectRemove();
      }
    });
  });
}

// export function confirmButton(
//   alarm,
//   textDescription,
//   btnConfirm,
//   deleteUser,
//   id,
//   res
// ) {
//   showAlerts(alarm, textDescription, btnConfirm, deleteUser);
//   const alertsHTML = document.querySelector(".alerts");

//   document.querySelector(".alert__delete").classList.add("alert__delete__show");

//   let confirm = false;

//   alertsHTML.addEventListener("click", (e) => {
//     if (e.target.classList.contains("delete")) {
//       alertsHTML.classList.remove("alerts__show");
//       blurEffectRemove();
//       confirm = true;
//       delete res.cart[id];

//       localStorage.setItem("cart", JSON.stringify(res.cart));
//       printToCart(res);
//       printTotal(res);
//     }
//     confirm = false;
//   });

//   return confirm;
// }
