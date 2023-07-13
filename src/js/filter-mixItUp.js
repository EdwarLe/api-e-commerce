export function filterMixItUp() {
  mixitup(".products", {
    selectors: {
      target: ".product",
    },
    animation: {
      duration: 300,
    },
  });
}

export function btnsActive () {
  const btnsFiltersHTML = document.querySelectorAll('.btn__filter')

  btnsFiltersHTML.forEach(btn => {
    btn.addEventListener('click', () => {
      btnsFiltersHTML.forEach(btn => {
        btn.classList.remove('btn__filter--active')
      })
      btn.classList.add('btn__filter--active')
    })
  });
}
