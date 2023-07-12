export function blurEffectRemove() {
  document.querySelector(".nav__container").classList.remove("contanier__blur");
  document.querySelector(".container").classList.remove("container__blur");
  document.querySelector(".cart").classList.remove("container__blur")
  document.querySelector(".footer").classList.remove("container__blur")
}

export function blurEffectAdd() {
  document.querySelector(".nav__container").classList.add("contanier__blur");
  document.querySelector(".cart").classList.add("container__blur")
  document.querySelector(".container").classList.add("container__blur");
  document.querySelector(".footer").classList.add("container__blur");
}
