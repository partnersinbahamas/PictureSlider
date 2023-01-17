const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.children.length;

const sidebar = document.querySelector('.sidebar');

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`; 

upButton.addEventListener('click', () => {
  changeSlide('up');
});

downButton.addEventListener('click', () => {
  changeSlide('down');
});

let activeSlideIndex = 0;

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;

    if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
    }
  }

  if (direction === 'down') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
    }
  }
  const container = document.querySelector('.container');
  const containerHeight = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * containerHeight}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * containerHeight}px)`;
}
