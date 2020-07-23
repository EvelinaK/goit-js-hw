"use strict";

let total = 0;
let input;

while (input !== null) {
  input = Number(prompt("введи число"));

  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += Number(input);
  }
}

console.log(`Общая сумма ${total}`);
