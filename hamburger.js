const hamburger = document.querySelector('.navigation__hamburger');
const menu = document.querySelector('.navigation__menu ul');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('is-hidden')
})

