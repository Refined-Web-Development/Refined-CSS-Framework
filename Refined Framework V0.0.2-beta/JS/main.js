/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const dots = document.querySelectorAll('.carousel-dot');

let currentIndex = 0;
let autoLoop;

// Update the carousel position and the active dot
function updateCarousel() {
  const width = items[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${currentIndex * width}px)`;

  dots.forEach((dot) => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Go to the next item
function goToNext() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

// Go to the previous item
function goToPrev() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  updateCarousel();
}

// Add click event for navigation buttons
prevButton.addEventListener('click', () => {
  goToPrev();
  resetAutoLoop();
});

nextButton.addEventListener('click', () => {
  goToNext();
  resetAutoLoop();
});

// Add click event for dots
dots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index, 10);
    updateCarousel();
    resetAutoLoop();
  });
});

// Auto-loop function
function startAutoLoop() {
  autoLoop = setInterval(goToNext, 5000); // 5 seconds timer
}

// Reset auto-loop when user interacts
function resetAutoLoop() {
  clearInterval(autoLoop);
  startAutoLoop();
}

// Handle resize
window.addEventListener('resize', updateCarousel);

// Start the carousel auto-loop
startAutoLoop();
