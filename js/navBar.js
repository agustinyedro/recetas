const burger = document.getElementById('burger');
const navBar = document.getElementById('nav-bar-burger');

burger.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
    navBar.classList.toggle('active');
    burger.classList.toggle('burger-x');
})