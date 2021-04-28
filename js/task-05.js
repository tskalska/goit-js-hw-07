// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('.js-input');
const nameOutput = document.querySelector('span#name-output');

console.dir(input);
console.dir(nameOutput);

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value){
  nameOutput.textContent = 'незнакомец'}
  else {
  nameOutput.textContent=event.currentTarget.value;}
  console.log(event.currentTarget.value);
}