// Burger-menu

const burgerButton = document.querySelector('.burger__button');
const burgerNav = document.querySelector('.burger__nav');
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    burgerNav.classList.toggle('nav__active');
});

document.addEventListener('click', (e) => {
    if ( e.target.closest('.nav__item a') || e.target === overlay ) {
        burgerButton.classList.remove('active');
        burgerNav.classList.remove('nav__active');
    };
});
