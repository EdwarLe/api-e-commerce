export function showMenu() {
  const headerContainerHTML = document.querySelector(".header__container");
  if (window.scrollY > 50) {
    headerContainerHTML.classList.add("show__header__container");
  } else {
    headerContainerHTML.classList.remove("show__header__container");
  }
}
