let headerHam = document.querySelector(".headerHam");

let hamMenu = document.querySelector(".hamMenu");

let hamClose = document.querySelector(".hamMenu i");

headerHam.addEventListener("click", () => {
    hamMenu.classList.toggle("hamMenuTransition")
})

hamClose.addEventListener("click", () => {
    hamMenu.classList.toggle("hamMenuTransition");
    hamMenu_plants_type_menu.classList.remove("plants-type-menu-transition")
})




let hamMmenu_plantsType = document.querySelector(".hamMenu .plantsType");
let hamMenu_plants_type_menu = document.querySelector(".hamMenu .plantsType .plants-type-menu");
let hamMenu_plants_type_close = document.querySelector(".hamMenu .plantsType .plants-type-menu .plants-close");

hamMmenu_plantsType.addEventListener("click", () => {
  hamMenu_plants_type_menu.classList.add("plants-type-menu-transition")
})

hamMenu_plants_type_close.addEventListener("click", (event) => {
  event.stopPropagation();
  hamMenu_plants_type_menu.classList.remove("plants-type-menu-transition");
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
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
