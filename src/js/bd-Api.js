const BASE_URL = "https://ecommercebackend.fundamentos-29.repl.co/";
const BASE_LOCAL = "https://services-academlo-shopping.onrender.co/";

export async function getProductsApi() {
  try {
    const data = await fetch(BASE_URL);
    const res = await data.json();

    localStorage.setItem("products", JSON.stringify(res));

    return res;
  } catch (error) {
    const dataRes = await fetch(BASE_LOCAL)
    const resSecond = await dataRes.json();

    localStorage.setItem('productsRes', JSON.stringify(resSecond))
  }
}
