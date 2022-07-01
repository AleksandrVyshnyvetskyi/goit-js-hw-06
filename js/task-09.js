function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн 
// стиль при клике на button.change-color и выводит значение цвета в span.color.

// document.body.style.background = getRandomHexColor;

// btnDecrement.addEventListener('click', () => {
//   counterValue -= 1;
//   counter.textContent = counterValue;
// });

const btnColor = document.querySelector(".change-color");
// console.log(btnColor);
btnColor.addEventListener("click", changeColor);


function changeColor(event) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;

  const spanTextColor = document.querySelector(".color");
  spanTextColor.textContent = randomColor;
}