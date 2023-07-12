export function darkMode() {

  const bxsSunHTML = document.querySelector('.bxs-sun')


  if(JSON.parse(localStorage.getItem('darkMode'))){
    document.body.classList.add('dark__mode')
  } else {
    document.body.classList.remove('dark__mode')
  }

  bxsSunHTML.addEventListener("click", () => {
    if(JSON.parse(localStorage.getItem('darkMode'))){
      localStorage.setItem('darkMode', JSON.stringify(false))
      document.body.classList.remove('dark__mode')
    } else {
      localStorage.setItem('darkMode', JSON.stringify(true))
      document.body.classList.add('dark__mode')
    }
})
}
