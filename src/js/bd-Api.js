const BASE_URL = "https://ecommercebackend.fundamentos-29.repl.co/";
const BASE_LOCAL = "https://services-academlo-shopping.onrender.co/";

export async function getProductsApi() {
  try {
    const data = await fetch(BASE_LOCAL);
    const res = await data.json();

    localStorage.setItem("products", JSON.stringify(res));

    return res;
  } catch (error) {
    console.log("Eso es un error");
  }
}
