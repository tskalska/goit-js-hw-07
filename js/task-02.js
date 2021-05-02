// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.getElementById('ingredients'); 
console.log(listEl);

const makeList = function (list){
    // console.log (list);
    const ingredientsListEl = list.map(listItem=>{
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = listItem;
    console.log (ingredientEl);
    return ingredientEl;
    })
  return (listEl.append(...ingredientsListEl));
}

makeList(ingredients);