const hero = document.querySelector(".hero");
const menuIcon = document.querySelector(".menuIcon");
const navMenu = document.querySelector(".navMenu");
const headerText = document.querySelector(".headerText");

menuIcon.addEventListener("click", () => {
    hero.classList.toggle("mobile-show");
    menuIcon.classList.toggle("mobile-show");
    navMenu.classList.toggle("mobile-show");
    headerText.classList.toggle("mobile-show");
});
