const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal');

//Открытие модального окна
modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

//Закрытие модального окна
modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden');
    }
});
