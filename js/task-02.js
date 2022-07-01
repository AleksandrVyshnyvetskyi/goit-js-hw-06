// Задание 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
// console.log(listIngredients);

const createIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const createElement = document.createElement('li');
  createElement.textContent = ingredient;
    return createElement;
  });
};

const listElements = createIngredientsList(ingredients);
listIngredients.append(...listElements);





