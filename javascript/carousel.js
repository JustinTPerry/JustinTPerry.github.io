const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById("carousel-button-next").addEventListener("click", function moveToNextSlide(event) {
    slides[slidePosition].classList.remove("carousel-item-visible");
    slidePosition === totalSlides - 1 ? slidePosition = 0 : slidePosition += 1;
    slides[slidePosition].classList.add("carousel-item-visible");
})

document.getElementById("carousel-button-prev").addEventListener("click", function moveToPrevSlide(event) {
    slides[slidePosition].classList.remove("carousel-item-visible");
    slidePosition === 0 ? slidePosition = totalSlides - 1 : slidePosition -= 1;
    slides[slidePosition].classList.add("carousel-item-visible");
})