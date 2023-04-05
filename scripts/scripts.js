const buttonScroll = document.querySelector(".main__scroll-container")
const slider = document.querySelector(".quality__slider")
const sliderImg = slider.querySelector(".quality__img-gallery")
const arrowLeft = document.querySelector(".quality__arrow_img_left")
const arrowRight = document.querySelector(".quality__arrow_img_right")
const galleryImg = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-6.jpg", "gallery-7.jpg"]

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

let i = 0

sliderImg.src = "/images/gallery/" + galleryImg[i]

arrowRight.addEventListener('click', function() {
  i++;
  if (i === galleryImg.length) {
    i = 0;
  }
  sliderImg.src = "/images/gallery/" + galleryImg[i]
});

arrowLeft.addEventListener('click', function() {
  i--;
  if (i === -1) {
    i = galleryImg.length - 1;
  }
  sliderImg.src = "/images/gallery/" + galleryImg[i]
});

buttonScroll.addEventListener("click", scrollTop)


