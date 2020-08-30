// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега h2)
//  и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

document.addEventListener("DOMContentLoaded", () => {
  let category = document.querySelectorAll("li.item");

  console.log(`В списке ${category.length} категории`);
  // const ulCat = Array.from(document.querySelector("#categories").children);

  for (let elem of category) {
    // let categ = elem.firstElementChild.textContent;
    let categ = elem.querySelector("h2").textContent;
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${categ} \Количество элементов: ${quantityElem}`);
  }
});
