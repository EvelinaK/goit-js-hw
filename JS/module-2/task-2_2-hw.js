// Напиши скрипт подсчета стоимости гравировки украшений.
//  Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
//  принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова,
//   и возвращающую цену гравировки всех слов в строке.

const calculateEngravingPrice = function (message, pricePerWord) {
  debugger;
  let msg = message.split(" ").length;
  let word = msg * pricePerWord;
  return word;
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
