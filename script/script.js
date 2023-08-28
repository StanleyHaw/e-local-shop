const carouselWrappers = document.querySelectorAll('.item-cards-wrapper');

carouselWrappers.forEach((wrapper) => {
  const carousel = wrapper.querySelector('.item-cards-carousel');
  const buttonToLeft = wrapper.querySelector('.card-button-left');
  const buttonToRight = wrapper.querySelector('.card-button-right');
  const cardWidth = carousel.querySelector('.item-card').offsetWidth;

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  buttonToLeft.addEventListener('click', () => {
    carousel.scrollLeft -= cardWidth;
  });

  buttonToRight.addEventListener('click', () => {
    carousel.scrollLeft += cardWidth;
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
});
