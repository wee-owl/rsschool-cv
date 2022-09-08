// Burger-menu

const burgerButton = document.querySelector('.burger__button');
const burgerNav = document.querySelector('.burger__nav');
const navLink = document.querySelector('.nav__link');

burgerButton.onclick = function() {
    burgerButton.classList.toggle('active');
    burgerNav.classList.toggle('nav__active');
};

document.addEventListener('click', function(e) {
    if (e.target.closest('.nav__link') !== null) {
        burgerButton.classList.remove('active');
        burgerNav.classList.remove('nav__active');
    };
});