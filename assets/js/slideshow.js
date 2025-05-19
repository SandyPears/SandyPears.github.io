function initSlideshows() {
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach(container => {
    const wrapper = container.querySelector(".slides-wrapper");
    const slides = container.querySelectorAll(".mySlide");
    let slideIndex = 0;

    wrapper.style.width = `${slides.length * 100}%`;

    function updateSlidePosition() {
      wrapper.style.transform = `translateX(-${slideIndex * (100 / slides.length)}%)`;
    }

    function showSlides() {
      slideIndex = (slideIndex + 1) % slides.length;
      updateSlidePosition();
      setTimeout(showSlides, 5000);
    }

    updateSlidePosition();
    setTimeout(showSlides, 5000);
  });
}

window.onload = initSlideshows;

function plusSlides(n) {

  const totalSlides = document.querySelectorAll(".mySlide").length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  updateSlidePosition();
}