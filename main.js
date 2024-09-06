const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const slider = document.querySelector('.slider');   /*home slide*/
const slides = document.querySelectorAll('.slide');  /*home slide*/
const prevButton = document.querySelector('.prev');  /*home slide*/
const nextButton = document.querySelector('.next');  /*home slide*/
const marqueeContent = document.querySelector('.marquee-content');  /* marquee*/
const images = marqueeContent.querySelectorAll('img');  /* marquee*/
const totalWidth = Array.from(images).reduce((acc, img) => acc + img.width, 0); /* marquee*/


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px", /* specifies that element will move a distance og 50px as they appear */
  origin: "bottom",
  duration: 1000,
};

// const sr = ScrollReveal ({
//   distance : '45px',
//   duration : 2700,
//   reset : true, /* animation shld reset when the element goes out of view and then comes back into view */
// })


let currentIndex = 0;

function showSlide(index) {
  if (index >= slides.length) {
      currentIndex = 0;
  } else if (index < 0) {
      currentIndex = slides.length - 1;
  } else {
      currentIndex = index;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// header container
ScrollReveal().reveal(".header_container .section_subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});


// slide
prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// slide: Auto-slide
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);


// room container
ScrollReveal().reveal(".room_card", {
  ...scrollRevealOption,
  interval: 500,
});


// feature container
ScrollReveal().reveal(".feature_card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news_card", {
  ...scrollRevealOption,
  interval: 500,
});

// marquee gallery
marqueeContent.style.animationDuration = `${totalWidth / 100}px`;

// suite about
// sr.reveal('.quality-content',{ delay:350, origin:'left' })
// sr.reveal('.qulity-image',{ delay:350, origin:'right' })

