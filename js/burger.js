const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');

// Функция, которая будет добавлять и убирать класс
const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
}

// По клику будем запускать функцию toggleMenu
burger.addEventListener('click', () => toggleMenu());