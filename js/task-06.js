// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.


const input = document.querySelector('#validation-input');

const inputField = event => {
    input.classList.add('invalid');

    switch (event.currentTarget.value.length) {
    case Number(event.target.dataset.length):
        input.classList.replace('invalid', 'valid');
        break;
    case 0:
        input.classList.remove('invalid');
        break;
    }
};
input.addEventListener('input', inputField);