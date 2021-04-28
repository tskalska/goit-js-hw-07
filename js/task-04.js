// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const buttonElDecrement = document.querySelector('button[data-action="decrement"]');
console.log(buttonElDecrement);

const buttonElIncrement = document.querySelector('button[data-action="increment"]');
console.log(buttonElIncrement);

let currentValue =  parseInt(document.querySelector('span#value').textContent);

console.log (currentValue);

const handleIncrementClick = ()=>{
  currentValue +=1;
  document.querySelector('span#value').textContent = currentValue;
};

const handleDecrementClick = ()=>{
  currentValue -=1;
  document.querySelector('span#value').textContent = currentValue;
};

buttonElDecrement.addEventListener('click', handleDecrementClick);

buttonElIncrement.addEventListener('click', handleIncrementClick);


