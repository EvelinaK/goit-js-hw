// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
const formatString = function (string) {
  while (true) {
    let value = prompt("введите ваш текст");
    let str = value;
    let longnamb = 40;
    for (let i = 0; i < str.length; i++) {
      if (str.length > longnamb) {
        return alert(`вы ввели:${str.slice(0, longnamb - 1) + "..."}`);
      }
      if (value === null) {
        break;
      } else {
        alert(`вы ввели: ${str}`);
        break;
      }
    }
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
