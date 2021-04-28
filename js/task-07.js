// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('input#font-size-control');
const spanEl =  document.querySelector('.js-span');
// console.dir(inputEl);
// console.log(spanEl.style.fontSize);


inputEl.addEventListener('input', onInputChange);

function onInputChange(event){
  spanEl.style.fontSize=`${event.currentTarget.value}px`;
  console.log(event.currentTarget.value);
};