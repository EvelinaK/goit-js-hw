const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li
// за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().
// let ul = document.querySelector("#ingredients");

// const createLi = (arr) => {
//   for (const el of arr) {
//     console.log(el);
//     let li = document.createElement("li");
//     li.append(el);
//     ul.append(li);
//   }
// };
// createLi(ingredients);
// сделать через map как в видео

let ul = document.querySelector("#ingredients");

const createGallery = (array) =>
  array.map((arr) => {
    let li = document.createElement("li");
    li.append(arr);
    ul.append(li);
  });
createGallery(ingredients);
