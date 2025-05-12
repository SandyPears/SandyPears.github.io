let slideIndex = 0;

function showSlides() {
  const wrapper = document.querySelector(".slide-wrapper");
  const slideWidth = wrapper.clientWidth;
  const totalSlides = document.querySelectorAll(".mySlides").length;

  wrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  slideIndex = (slideIndex + 1) % totalSlides;

  setTimeout(showSlides, 5000);
}

function plusSlides(n) {
  const wrapper = document.querySelector(".slide-wrapper");
  const slideWidth = wrapper.clientWidth;
  const totalSlides = document.querySelectorAll(".mySlides").length;

  slideIndex += n;
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;

  wrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

window.onload = showSlides;
