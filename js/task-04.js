const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
counterValue = +value.textContent;

const btnDownClick = () => {
    console.log('-1 click')
    counterValue -= 1;
    value.textContent = counterValue;
};

const btnUpClick = () => {
    console.log('+1 click')
    counterValue += 1;
    value.textContent = counterValue;
};


btnUp.addEventListener("click", btnUpClick);
btnDown.addEventListener("click", btnDownClick)

