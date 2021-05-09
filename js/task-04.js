const buttonElDecrement = document.querySelector('button[data-action="decrement"]');
console.log(buttonElDecrement);

const buttonElIncrement = document.querySelector('button[data-action="increment"]');
console.log(buttonElIncrement);

let valueEl = document.querySelector('span#value');

let currentValue = 0;

console.log (currentValue);

const handleIncrementClick = ()=>{
  currentValue +=1;
  valueEl.textContent = currentValue;
};

const handleDecrementClick = ()=>{
  currentValue -=1;
  valueEl.textContent = currentValue;
};

buttonElDecrement.addEventListener('click', handleDecrementClick);

buttonElIncrement.addEventListener('click', handleIncrementClick);

// условия-------------------------------------
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


