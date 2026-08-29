const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');

// При клике на кнопке у всех кнопок удалить класс, и добавить его только кликнутой кнопке
btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btns.forEach((btnItem) => {
            btnItem.classList.remove('feature__link_active');
        });

        btnItem.classList.add('feature__link_active');

        lists.forEach((listItem) => {
            listItem.classList.add('hidden');
        });

        lists[index].classList.remove('hidden');
    });
});
