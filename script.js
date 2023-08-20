const carousel = document.querySelector('.best-deals-carousel');
const arrowButtons = document.querySelectorAll('.carousel-card-button i');
const firstCardWidth = carousel.querySelector('.best-deals-card').offsetWidth;
const CAROUSEL_GRID_GAP = 16;

let isDragging = false;
let startX = null;
let startScrollLeft = null;

arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.className.includes('card-button-left')) {
      carousel.scrollLeft -= firstCardWidth + CAROUSEL_GRID_GAP; // TODO: 如何連動scss第272的gap屬性
    } else {
      carousel.scrollLeft += firstCardWidth + CAROUSEL_GRID_GAP; // TODO: 如何連動scss第272的gap屬性
    }
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
