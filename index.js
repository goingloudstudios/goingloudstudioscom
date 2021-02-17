//Hamburger menu
const hamburgerIcon = document.querySelector("#navbar-burger-icon");
const hamburgerMenu = document.querySelector("#navbar-menu");
const hamburgerLinks = document.querySelectorAll(".navbar-item");

hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
});

hamburgerLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('is-active');
    });
});