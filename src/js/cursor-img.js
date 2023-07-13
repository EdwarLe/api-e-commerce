export function cursorNotAllowedImg() {
  const cursorNotAllowed = document.querySelectorAll(".sold__out");

  cursorNotAllowed.forEach((item) => {
    if (item.classList.contains("sold__out")) {
      item.closest(".product").style = "cursor: not-allowed";
      item.previousElementSibling.style = "cursor: not-allowed";
    }
  });
}
