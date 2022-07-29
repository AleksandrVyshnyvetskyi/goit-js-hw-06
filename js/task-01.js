// const categories = document.querySelector('h2');
// console.log('Category: ', categories.textContent);

// const categoriesLength = document.querySelector('categories');
// console.log(categoriesLength)


const elementList = document.querySelector('#categories');
const quantityСategories = elementList.children;
console.log(`Number of categories: ${quantityСategories.length}`);

[...quantityСategories].forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
})