// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

const checkForSpam = function (message) {
  //   string.toLowerCase().indexOf(substring) !== -1;
  // оператор сравнения два сабстринга а потом фолс
  debugger;
  let me = message.toLowerCase();
  let mess;

  mess = me.indexOf("spam") !== -1 || me.indexOf("sale") !== -1 ? true : false;

  return mess;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

("use strict");
const checkForSpam = function (message) {
  const FORBIDDEN_WORDS = ["spam", "sale"];
  for (let element of FORBIDDEN_WORDS) {
    if (message.toLowerCase().indexOf(element.toLowerCase()) !== -1) {
      return true;
    }
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
