let headerHam = document.querySelector(".headerHam");

let hamMenu = document.querySelector(".hamMenu");

let hamClose = document.querySelector(".hamMenu i");

headerHam.addEventListener("click", () => {
    hamMenu.classList.toggle("hamMenuTransition")
})

hamClose.addEventListener("click", () => {
    hamMenu.classList.toggle("hamMenuTransition")
})

