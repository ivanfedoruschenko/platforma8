const buttonScroll = document.querySelector(".main__scroll-container")

const scrollTop = () => {
  window.scrollTo(0,0)
}

window.onscroll = () => {
  if(window.scrollY > 700) {
    buttonScroll.classList.remove("main__scroll-container_hide")
  }
  else if(window.scrollY < 700){
    buttonScroll.classList.add("main__scroll-container_hide")
  }
}

buttonScroll.addEventListener("click", scrollTop)
