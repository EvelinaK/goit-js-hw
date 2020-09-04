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

let ul = document.querySelector("#ingredients");

const createGallery = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

ul.prepend(...createGallery);
