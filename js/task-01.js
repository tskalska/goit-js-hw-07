// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// 1.-------------------

// const categories = document.querySelector('ul#categories');
// const categoriesCount = categories.querySelectorAll('li.item').length;

// console.dir(categoriesCount);
// console.log(`В списке ${categoriesCount} элементa`);

// const  categoriesTitleList = Array.from(categories.querySelectorAll('h2'));

// const  categoryTitle = categoriesTitleList.forEach(category => {console.log(category.textContent);
//   const categoryElList = category.nextElementSibling;
// console.log(categoryElList.querySelectorAll('li').length);
// ;})

// 2.------------------

// const categories = document.querySelector('ul#categories');

// console.log(`В списке ${categories.querySelectorAll('li.item').length} элементa`);

// const allElementsTitle = categories.querySelectorAll('h2');  

// for (let titleElement of categories.querySelectorAll('h2')) {
//   console.log(`Категория: ${
//     titleElement.textContent}`);
//   console.log ('Количество элементов:',
//     titleElement.parentNode.querySelectorAll('ul > li').length
//   );
// }
// ------------------------------------------------
// const categoriesList = document.querySelector('ul#categories');
// const categories = categoriesList.querySelectorAll('li.item');
// console.log(`В списке ${categories.length} элементa`);


// function showCategoryDetails(categories){
//   const categoryItem = Object.values(categories);
//     const categoryDetails = categoryItem.map(category=>{
//       console.log (`Категория:${category.querySelector('h2').textContent}`);
//       console.log (`Количество элементов:${category.querySelectorAll('li').length}`);
//     });
// }

// showCategoryDetails(categories);


// ----------------------------

const categories = document.querySelectorAll('.item');

categories.forEach(category => {
  console.log(`Категория:${category.firstElementChild.textContent},
  Количество элементов:${category.lastElementChild.children.length}`)
});

