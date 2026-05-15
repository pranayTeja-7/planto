let headerHam = document.querySelector(".headerHam");

let hamMenu = document.querySelector(".hamMenu");

let hamClose = document.querySelector(".hamMenu i");

headerHam.addEventListener("click", () => {
    hamMenu.classList.toggle("hamMenuTransition")
})

hamClose.addEventListener("click", () => {
    hamMenu.classList.toggle("hamMenuTransition")
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
});