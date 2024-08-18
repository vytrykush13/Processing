const burger = document.getElementById('nav_burger');
const menu = document.getElementById('nav_menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
})