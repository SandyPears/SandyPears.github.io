function initSlideshows() {
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach(container => {
    const wrapper = container.querySelector(".slides-wrapper");
    const slides = container.querySelectorAll(".mySlide");
    let slideIndex = 0;

    wrapper.style.width = `$ {slides.length * 100}%`;

    function updateSlidePosition() {
      wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function showSlides() {
      slideIndex = (slideIndex + 1) % slides.length;
      updateSlidePosition();
      setTimeout(showSlides, 5000);
    }

    function plusSlides(n) {
      slideIndex = (slideIndex + n + slides.length) % slides.length;
      updateSlidePosition();
    }

    container.querySelectorAll(".prev, .next").forEach(button => {
      button.addEventListener("click", (e) => {
        const increment = e.target.classList.contains("next") ? 1 : -1;
        plusSlides(increment);
      });
    });

    updateSlidePosition();
    setTimeout(showSlides, 5000);
  });
}

window.onload = initSlideshows;

