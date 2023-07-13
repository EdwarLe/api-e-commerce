export function darkMode() {
  const bxsSunHTML = document.querySelector(".moon__sun");

  function handleDarkMode () {
    if(document.body.classList.contains('dark__mode')) {
      document.body.classList.remove('dark__mode');
      bxsSunHTML.innerHTML = `<i class='bx bxs-moon'></i>`
      localStorage.removeItem('darkMode')
    } else {
      document.body.classList.add('dark__mode')
      bxsSunHTML.innerHTML = `<i class='bx bxs-sun bx-spin-hover'></i>`
      localStorage.setItem('darkMode', true)
    }
  }

  bxsSunHTML.addEventListener('click', () => handleDarkMode());

  let darkModeSave = localStorage.getItem("darkMode")

  if(darkModeSave) {
    document.body.classList.add('dark__mode')
    bxsSunHTML.innerHTML = `<i class='bx bxs-moon'></i>`
  }
}
