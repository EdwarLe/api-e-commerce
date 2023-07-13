export function printProducts(res) {
  let html = "";
  res.products.forEach((product) => {
    const { image, name, price, quantity, category, id } = product;
    html += `
                  <div class="product ${category}">
                    <img src="${image}" alt="${name}" class="img__select" id=${id}>
                    ${
                      quantity
                        ? `<i class='bx bx-plus btn-add' id=${id}></i>`
                        : "<p class='sold__out'>Sold Out</p>"
                    }
                    <div class="info__product">
                      <div class="info__price">
                        <p><b>$${price}.00</b></p>
                        <small>stock: ${quantity}</small>
                      </div>
                      <p>${name}</p>
                      </div>
                      
                  </div>`;
  });
  document.querySelector(".products").innerHTML = html;
}

export function printToCart(res) {
  let html = "";

  for (const key in res.cart) {
    const { name, image, id, ammount, price, quantity } = res.cart[key];

    html += `
              <div class="cart__product">
                <div class="cart__product__img">
                  <img src="${image}" alt="${name}">
                </div>
                <div class="cart__product__info">
                  <p><b>${name}</b></p>
                  <small>Stock: ${quantity} | $${price}.00</small>
                  <p>Subtotal: $${ammount * price}.00 </p>
                  <div class="cart__product__info__selectors" id="${id}">
                  <i class='bx bx-minus'></i>
                  <p>${ammount}</p>
                  <i class='bx bx-plus'></i>
                  <i class='bx bxs-trash'></i>
                  </div>
                </div>
              </div>`;
  }

  document.querySelector(".cart__products").innerHTML = html;
}

export function printTotal(res) {
  let unit__info = 0;
  let total__info = 0;

  for (const key in res.cart) {
    const { ammount, price } = res.cart[key];
    unit__info += ammount;
    total__info += ammount * price;
  }

  document.querySelector(".unit__info").textContent = unit__info;
  document.querySelector(".total__info").textContent = total__info;
  document.querySelector(".cart__unit").textContent = unit__info;
}

export function printExpandCards(res) {
  let html = "";

  const shirt = res.products.slice(0, 1);
  const hoddie = res.products.slice(7, 8);
  const sweater = res.products.slice(16, 17);

  html += `
            <div class="img__expand">
              <img src="${shirt[0].image}" alt="${shirt[0].name}">
              <div class="info__expand">
                <p>${shirt[0].description}</p>
                <a href="#filters">VER MÁS</a>
              </div>
            </div>
            <div class="img__expand">
              <img src="${hoddie[0].image}" alt="${hoddie[0].name}">
              <div class="info__expand">
                <p>${hoddie[0].description}</p>
                <a href="#filters">VER MÁS</a>
              </div>
            </div>
            <div class="img__expand">
              <img src="${sweater[0].image}" alt="${sweater[0].name}">
              <div class="info__expand">
                <p>${sweater[0].description}</p>
                <a href="#filters">VER MÁS</a>
              </div>
            </div>`;

  document.querySelector(".expand").innerHTML = html;
}
