// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGalary = (pictures)=>{
  return pictures.map(picture=>{
    const listEl = document.getElementById('ingredients');
    listEl.insertAdjacentHTML('afterbegin',`<li><img src=${picture.url} alt=${picture.alt} width=500></img></li>`);
    return listEl;
  })
}

const galary = makeGalary(images);

// ----------------------2
// const makeGalary = (pictures)=>{
//     return pictures.map(picture=>{
//     const liEl = document.createElement('li');
//     const imgEl = document.createElement('img');
//     imgEl.src = picture.url;
//     imgEl.alt = picture.alt;
//     imgEl.width = 100;
//     ;
//     return liEl.appendChild(imgEl);
//   })
// } 

// const galary = makeGalary(images);
// listEl.append(...galary);

