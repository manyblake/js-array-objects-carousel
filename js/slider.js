const nextArrow = document.querySelector(`.arrow-next`);
const prevArrow = document.querySelector(`.arrow-prev`);
const slidesContainer = document.querySelector(`.slides-wrapper`);
let interval = setInterval(nextSlide, 3000);
let currentIndex = 0;

const slides = [
  {
    url: `http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg`,
    title: `Svezia`,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.`,
  },

  {
    url: `https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg`,
    title: `Perù`,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.`,
  },

  {
    url: `https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c`,
    title: `Chile`,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.`,
  },
  {
    url: `https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg`,
    title: `Argentina`,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.`,
  },
  {
    url: `https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop`,
    title: `Colombia`,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.`,
  },
];

slides.forEach((element, i) => {
  const slide = document.createElement(`li`);
  slide.className = `slide`;
  if (i === 0) slide.classList.add(`active`);
  slidesContainer.appendChild(slide);

  const slideImg = document.createElement(`img`);
  slideImg.src = element.url;
  slide.appendChild(slideImg);

  const slideContent = document.createElement(`div`);
  slideContent.className = `slide__content`;
  slide.appendChild(slideContent);

  const slideTitle = document.createElement(`h3`);
  slideTitle.className = `slide__title`;
  slideTitle.innerHTML = element.title;
  slideContent.appendChild(slideTitle);

  const slideDescription = document.createElement(`p`);
  slideDescription.className = `slide__description`;
  slideDescription.innerHTML = element.description;
  slideContent.appendChild(slideDescription);
});

function nextSlide() {
  const slider = document.querySelectorAll(`.slide`);
  const slideActive = slider[currentIndex];
  slideActive.classList.remove(`active`);

  if (currentIndex < slider.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  const nextSlide = slider[currentIndex];

  nextSlide.classList.add(`active`);
}

function prevSlide() {
  const slider = document.querySelectorAll(`.slide`);
  const slideActive = slider[currentIndex];
  slideActive.classList.remove(`active`);

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slider.length - 1;
  }

  const nextSlide = slider[currentIndex];

  nextSlide.classList.add(`active`);
}

prevArrow.addEventListener(`click`, prevSlide);

nextArrow.addEventListener(`click`, function () {
  nextSlide();
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
});

slidesContainer.addEventListener(`mouseover`, function () {
  clearInterval(interval);
});

slidesContainer.addEventListener(`mouseleave`, function () {
  interval = setInterval(nextSlide, 3000);
});
