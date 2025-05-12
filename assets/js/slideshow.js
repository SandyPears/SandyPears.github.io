let slideIndex = 0;

function showSlides() {
  const wrapper = document.querySelector(".slides-wrapper");
  const totalSlides = document.querySelectorAll(".mySlide").length;
  wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideIndex = (slideIndex + 1) % totalSlides;
  setTimeout(showSlides, 5000);
}

function plusSlides(n) {
  const wrapper = document.querySelector(".slides-wrapper");
  const totalSlides = document.querySelectorAll(".mySlide").length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

window.onload = showSlides;