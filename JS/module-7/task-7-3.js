// Напиши скрипт для создания
//  галлереи изображений по массиву данных.
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// В HTML есть список ul#gallery.

// {

// Используй массив объектов images для создания тегов img вложенных в li.
//  Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// }

let ul = document.querySelector("#gallery");

const createGallery = (array) =>
  array.map((arr) => {
    // ul.insertAdjacentHTML(
    //   "beforeEnd",
    //   `<li><img src="${arr.url}" alt="${arr.alt}"></li>`
    // );
  });

const getImage = (images) => {
  return images.reduce((html, image) => {
    // allImg.push(image.url, image.alt);
    html += `<li><img src="${image.url}" alt="${image.alt}"></li>`;
    return html;
  }, "");
};
console.log(getImage);
ul.insertAdjacentHTML("afterbegin", getImage(images));
// const galleryImages = document.querySelector("#gallery");
// console.log(galleryImages);

// const makeGallery = function (images) {
//   return images.reduce((acc, { url, alt }) => {
//     acc += `<li class = 'imageItem'><img src=${url} alt ="${alt}"></li>`;
//     return acc;
//   }, "");
// };

// galleryImages.insertAdjacentHTML("afterbegin", makeGallery(images));
