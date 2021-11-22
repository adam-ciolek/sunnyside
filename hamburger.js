const hamburger = document.querySelector('.navigation__hamburger svg')
const nav = document.querySelector('.navigation__menu ul')


hamburger.addEventListener('click', () => {
    nav.classList.toggle('hamburger-toggle');
    
})