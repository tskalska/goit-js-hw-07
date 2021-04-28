// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (let ingredient of ingredients){ 
  const listEl = document.getElementById('ingredients');
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  listEl.appendChild(ingredientEl);
}



