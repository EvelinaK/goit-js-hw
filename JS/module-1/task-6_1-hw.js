"use strict";
// let total = 0;

// do {
//   let input = prompt("введи число");

//   if (input === null) {
//     console.log("отказ");
//     break;
//   } else if (!!Number(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     total += Number(input);
//   }
// } while (true);

// console.log(`Общая сумма ${total}`);

("use strict");
let total = 0;

do {
  let input = prompt("введи число");

  if (input === null) {
    console.log("отказ");
    break;
  } else if (!isFinite(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += Number(input);
  }
} while (true);

console.log(`Общая сумма ${total}`);
