"use strict";

const total = 100;
const ordered = 50;
let possibilityOrder;

if (ordered > total) {
  possibilityOrder = total;
  console.log(`На складе недостаточно твоаров!" итого ${possibilityOrder} `);
} else {
  possibilityOrder = ordered;
  console.log(`заказ оформлен! ${possibilityOrder} `);
  //
}
