import { printProducts } from "./ui.js";

import { printToCart } from "./ui.js";

import { printTotal } from "./ui.js";

export function payButton(res) {
  let newArray = [];

  res.products.forEach((product) => {
    if (res.cart[product.id]) {
      newArray.push({
        ...product,
        quantity: product.quantity - res.cart[product.id].ammount,
      });
    } else {
      newArray.push(product);
    }
  });
  res.products = newArray;
  res.cart = {};

  localStorage.setItem("products", JSON.stringify(res.products));
  localStorage.setItem("cart", JSON.stringify(res.cart));
  printProducts(res);
  printToCart(res);
  printTotal(res);
}
