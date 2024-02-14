// select arrows
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');

// save the number of images inside the container

const carouselContainer = document.querySelector('.carousel').children;

// the number of children and save in a new variable
let totalSlides = carouselContainer.length;
let index = 0;

// add event listener to the arrows

prevArrow.addEventListener('click', () => {
  moveSlides("prev");
});

nextArrow.addEventListener('click', () => {
  moveSlides("next");
});

const moveSlides = (direction) => {

  if(direction === 'next') {
    index++;
    if(index === totalSlides) {
      index = 0;
    }
  } else {
    if(index === 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  // loop through the children and set the style to none
  for(let i = 0; i < totalSlides; i++) {
    carouselContainer[i].classList.remove('main');
  }

  carouselContainer[index].classList.add('main');
  console.log(index);

};