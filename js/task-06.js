// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('input#validation-input');
const inputLength = inputEl.dataset.length;

// input.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event){
  if (parseInt(event.currentTarget.value.length)===parseInt(inputLength)){
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
}
