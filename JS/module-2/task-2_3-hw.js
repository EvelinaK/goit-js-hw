// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

function findLongestWord(str) {
  // Этап 1. Разбиваем строку на массив строк
  let strSplit = str.split(" ");
  // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
  // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

  // Этап 2. Инициализируем переменную, которая будет содержать в себе размер самого длинного слова
  let longestWord = "";

  // Этап 3. Создаем цикл FOR
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      // If strSplit[i].length больше, чем сравнимое слово...
      longestWord = strSplit[i]; // ...затем longestWord принимает новое значение
    }
  }
  /* Здесь strSplit.length = 9
       Для каждой итерации: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
       1 итерация:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
       2 итерация:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
       3 итерация:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
       4 итерация:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
       5 итерация:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
       6 итерация:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
       7 итерация:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
       8 итерация:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
       9 итерация:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
       10 итерация:       9             no               
       Конец цикла FOR */

  //Этап 4. Возвращаем самое длинное слово
  return longestWord; // 6
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
