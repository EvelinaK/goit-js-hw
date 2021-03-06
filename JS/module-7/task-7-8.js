// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
//  и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// // Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.
//  Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

document.addEventListener("DOMContentLoaded", () => {
  const divBox = document.querySelector("#boxes");
  const render = document.querySelector('[data-action="render"]');
  const destroy = document.querySelector('[data-action="destroy"]');
  const input = document.querySelector("#controls > input");

  const createBoxes = (amount) => {
    let divSize = 30;
    for (var i = 0; i < amount; i++) {
      let div = document.createElement("div");
      let size = divSize + i * 10;
      div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
      div.append(i);
      divBox.append(div);
    }
  };

  const textInputHandler = (event) => {
    const { currentTarget } = event;
  };

  const destroyBoxes = () => {
    boxes.innerHTML = "";
  };

  const random = () => {
    return Math.trunc(Math.random() * 256);
  };

  const randomNumberGenerator = (startNum = 0, endNum = 255) => {
    return Math.trunc(startNum + Math.random() * (endNum + 1 - startNum));
  };

  render.addEventListener("click", () => {
    const amount = +input.value;
    createBoxes(amount);
  });
  render.addEventListener("click", createBoxes);
  destroy.addEventListener("click", destroyBoxes);
});
//НАЗВАНИЕ ИЛИ САМУ ФУНКЦИЮ
