// Есть массив с тегами и значениями тегов. Пример: ["h2@Привет, Мир!", "span@Куку", "p@lorem ipsum dolor.", "a@Ссылка на инстаграм"]

// Разделитем между тегом и значением выступает символ @.

// Нужно создать новый массив с преобразованными HTMl-тегами: ["
// Привет, Мир!
// ", "Куку", "
// lorem ipsum dolor.

// ", "Ссылка на инстаграм"]
// После преобразования, заменить значения в старом массиве и очистить новый.

// надо пройти циклом фор или фунцией массив найти тег по сравнению
//  если равно или не равно и добавить где надо тег в конце и скобки
// предварительно убрав собаку

//рпзбили ,потом создали шаблонную строку с тегами и загнать в массив
// let tegs = [
//   "h2@Привет, Мир!",
//   "span@Куку",
//   "p@lorem ipsum dolor.",
//   "a@Ссылка на инстаграм",
// ];

// let temp = tegs.split("@");

// console.log(temp);
// let temp = arr2.join(",")

// let newArray = arr2.slice(0, arr2.length - 1);
// console.log(newArray);
// array = [
//   "h2@Привет, Мир!",
//   "span@Куку",
//   "p@lorem ipsum dolor.",
//   "a@Ссылка на инстаграм",
// ];

// array.forEach(function (element, index, array) {
//   array[index] = element.replace("@", "/>");
// });

// console.log(array);

// const array = [
//   "h2@Привет, Мир!",
//   "span@Куку",
//   "p@lorem ipsum dolor.",
//   "a@Ссылка на инстаграм",
// ];

// array1.forEach(function (element, index, array1) {
//   if (element.includes("@")) {
//     array[index] = element.replace("@", "/>");
//   }
// });

//инструкция выполнения
//"h2@Привет, Мир!",
//<h2>Привет, Мир!</h2>
// проверка строки на наличие @
//h2 получить в переменную (1 ищеш indexof позицию @, в переменнуб teg=item.slice( start[, end]))
// в нало строки + <
// заменить @ собачку на >
// к полученой выше строке в конец строки + </ + teg + >
// в массив запишеш новую строчку
const array = [
  "h2@Привет, Мир!",
  "span@Куку",
  "p@lorem ipsum dolor.",
  "a@Ссылка на инстаграм",
];
// console.log(array[3].indexOf("на"));

const findSymb = function (allTegs, separator = "#") {
  let counter = 0;
  debugger;
  for (const item of allTegs) {
    let index = item.indexOf(separator);
    let teg = item.slice(0, index);
    let newStr = "<" + item;
    newStr = newStr.replace(separator, ">");
    newStr = newStr + "</" + teg + ">";
    array[counter] = newStr;
    counter++;
    // let test = "pause";
  }
};
// findSymb(array, "@");
// console.log(array);

//вариант с циклом for  и упрощение
const findSymb4 = function (allTegs, separator = "#") {
  for (let i = 0; i < allTegs.length; i++) {
    let item = allTegs[i];
    let index = item.indexOf(separator);
    let tag = item.slice(0, index);
    let newStr = "<" + item;
    newStr = newStr.replace(separator, ">");
    newStr = newStr + "</" + tag + ">";
    array[i] = newStr;
    // let test = "pause";
  }
};

const findSymb4_1234 = function (allTegs, separator = "#") {
  for (let i = 0; i < allTegs.length; i++) {
    // debugger;
    let item = allTegs[i];
    let index = item.indexOf(separator);
    let tag = item.slice(0, index);
    let newStr = `<${item.replace(separator, ">")}</${tag}>`;
    // newStr = newStr.replace(separator, ">");

    // newStr = `${newStr}</${tag} >`;
    // newStr = newStr + "</" + tag + ">";
    array[i] = newStr;
  }
};

findSymb4_1234(array, "@");
console.log(array);

const findSymb2 = function (allTegs, separator = "#") {
  let counter = 0;
  for (const item of allTegs) {
    let temparrey = item.split(separator);
    array[counter] = `<${temparrey[0]}>${temparrey[1]}</${temparrey[0]}>`;
    counter++;
    let pause = 1;
  }
};
//это очень упрощенная реализация нне читается
const findSymb3 = function (allTegs, separator = "#") {
  let counter = 0;
  for (const item of allTegs) {
    array[counter] = `<${item.replace(separator, ">")}
    </${item.slice(0, item.indexOf(separator))}>`;
    counter++;
  }
};

// findSymb3(array, "@");
// console.log(array);
