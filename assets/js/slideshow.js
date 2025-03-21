let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let slideWidth = slides[0].clientWidth; // Get the width of a slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * slideWidth}px)`; // Scroll effect
  }
  slideIndex++;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Manual navigation functions
function plusSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let slideWidth = slides[0].clientWidth; // Get the width of a slide
  slideIndex += n;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * slideWidth}px)`; // Scroll effect
  }
}

window.onload = showSlides;