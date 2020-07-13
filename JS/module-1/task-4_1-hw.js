"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

let buyDroid = prompt("Сколько хотите купить дроидов?", 0);

if (buyDroid == null) {
  console.log(`'Отменено пользователем!'`);
} else {
  totalPrice = buyDroid * pricePerDroid;
}
if (totalPrice > credits) {
  message = `'Недостаточно средств на счету!'${totalPrice}`;
} else {
  console.log(
    `'Вы купили ${buyDroid} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.'`
  );
}
