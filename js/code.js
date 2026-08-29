const btn = document.querySelector('.feature__link');
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

// Преобразуем цикл for - на каждую кнопку повесим обработчик события
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => console.log('1'));
}

// Метод forEach - на каждую кнопку повесим обработчик события
btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btnItem.classList.add('feature__link--active');
    };
});


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


const linksHead = document.querySelectorAll('.menu-list__link');

linksHead.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const ID = event.target.getAttribute('href').substr(1);
        console.log(document.getElementById(ID));
    });
});

