const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

let currentIndex = 0;
let autoPlayInterval;
let autoPlayActive = false;

function createCarousel() {
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    slide.style.backgroundImage = `url(${image.url})`;
    carouselTrack.appendChild(slide);

    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    if (index === 0) indicator.classList.add("active");
    indicator.addEventListener("click", () => showSlide(index));
    carouselNav.appendChild(indicator);
  });

  updateCaption();
}

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".carousel-indicator");

  if (index < 0) currentIndex = images.length - 1;
  else if (index >= images.length) currentIndex = 0;
  else currentIndex = index;

  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  indicators.forEach((indicator, i) =>
    indicator.classList.toggle("active", i === currentIndex)
  );

  updateCaption();
}

function updateCaption() {
  caption.textContent = images[currentIndex].caption;
}

function toggleAutoPlay() {
  if (autoPlayActive) {
    clearInterval(autoPlayInterval);
    autoPlayButton.textContent = "Start Auto Play";
    timerDisplay.textContent = "";
  } else {
    let countdown = 5;
    timerDisplay.textContent = `Next in: ${countdown}s`;

    autoPlayInterval = setInterval(() => {
      countdown--;
      timerDisplay.textContent = `Next in: ${countdown}s`;
      if (countdown === 0) {
        showSlide(currentIndex + 1);
        countdown = 5;
      }
    }, 1000);

    autoPlayButton.textContent = "Stop Auto Play";
  }

  autoPlayActive = !autoPlayActive;
}

prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
autoPlayButton.addEventListener("click", toggleAutoPlay);

createCarousel();
