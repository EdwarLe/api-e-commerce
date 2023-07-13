export function goToUpBtn () {
    const btnUpOn = document.querySelector('.btn__up')

    btnUpOn.addEventListener('click', () => window.scrollTo(0, 0))
    
}


export const addBtnScroll = () => {

    const btnUpOn = document.querySelector('.btn__up')

    if(window.scrollY < 150) {
      btnUpOn.classList.remove('btn__up__on')
    } else {
      btnUpOn.classList.add('btn__up__on')
    }
  }

