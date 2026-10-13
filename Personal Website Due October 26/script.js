const slideImage = document.querySelector("#Slideshow img");
slideImage.src = "slideshow/01.jpg";
const slidebutton = document.querySelector("#Slideshow button");
const slideImages = [
  "slideshow/01.jpg",
  "slideshow/02.jpg",
  "slideshow/03.jpg",
  "slideshow/04.jpg",
  "slideshow/05.jpg",
  "slideshow/06.jpg",
  "slideshow/07.jpg",
  "slideshow/08.jpg",
  "slideshow/09.jpg",
  "slideshow/10.jpg",
];
let currentIndex = 0;

slidebutton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slideImages.length) {
    currentIndex = 0;
  }
  slideImage.src = slideImages[currentIndex];
});
