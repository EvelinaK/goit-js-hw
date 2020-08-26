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
  let category = document.querySelector("#categories").children.length;
  console.log(`В списке ${category} категории`);
  let item = document.querySelector("#categories>li.item > h2").textContent;
  let match = document.querySelector("#categories >li.item>ul").children.length;
  console.log(`Категория:${item} Количество элементов:${match}`);
});
