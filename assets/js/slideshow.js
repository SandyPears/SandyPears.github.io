let slideIndex = 0;

function updateSlidePosition() {
  const wrapper = document.querySelector(".slides-wrapper");

  wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function setSlides() {
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach(container => {
    const slides = container.querySelectorAll(".mySlide");
    let slideIndex = 0;

    function showSlides() {
      updateSlidePosition();
      slideIndex = (slideIndex + 1) % totalSlides;
      setTimeout(showSlides, 5000);
    }
    showSlides();
  });
}

function plusSlides(n) {

  const totalSlides = document.querySelectorAll(".mySlide").length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  updateSlidePosition();
}

window.onload = () => {
  const wrapper = document.querySelector(".slides-wrapper");
  const slides = document.querySelectorAll(".mySlide");
  wrapper.style.width = `${slides.length * 100}%`;
  showSlides();
};