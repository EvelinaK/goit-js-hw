"use strict";

let credits = 23580;
const pricePerDroid = 3000;

const buyDroid = prompt("Сколько хотите купить дроидов?", 0);

if (buyDroid == null) {
  console.log(`'Отменено пользователем!'`);
} else {
  const totalPrice = buyDroid * pricePerDroid;
  if (totalPrice > credits) {
    console.log(`'Недостаточно средств на счету!'${totalPrice}`);
  } else {
    console.log(
      `'Вы купили ${buyDroid} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.'`
    );
  }
}
