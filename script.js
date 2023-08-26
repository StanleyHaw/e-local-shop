const carousel = document.querySelector('.item-cards-carousel');
const arrowButtons = document.querySelectorAll('.carousel-card-button i');
const cardWidth = carousel.querySelector('.item-card').offsetWidth;

let isDragging = false;
let startX = 0;
let startScrollLeft = 0;

arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('card-button-left')) {
      carousel.scrollLeft -= cardWidth;
    } else if (button.classList.contains('card-button-right')) {
      carousel.scrollLeft += cardWidth;
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
