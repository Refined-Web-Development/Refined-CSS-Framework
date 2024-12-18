const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const dots = document.querySelectorAll('.carousel-dot');

let currentIndex = 0;

// Update the carousel position and the active dot
function updateCarousel() {
  const width = items[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${currentIndex * width}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Go to the next/previous item
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Add click event for dots
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index, 10);
    updateCarousel();
  });
});

// Handle resize
window.addEventListener('resize', updateCarousel);
