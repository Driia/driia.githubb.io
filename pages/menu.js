const open = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.header__wrap');
const account = document.querySelector('.acc-wrap');



open.addEventListener('click', function() {
    menu.classList.toggle('show');
})
open.addEventListener('click', function() {
    close.classList.toggle('show');
})
open.addEventListener('click', function() {
    account.classList.toggle('show');
})