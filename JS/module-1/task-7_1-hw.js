"use strict";
// Написать программу, которая генерирует случайное число в диапазоне от 1 до 100.
// Программа спрашивает у пользователя число, пользователь вводит.

// Если число больше загаданного системой - вывести фразу "Число больше"
// Если число меньше загаданного системой - вывести фразу "Число меньше"
// Если число равно числу загаданного системой - вывести фразу "Вы угадали! Поздравляем!"

const to = 100;
const from = 1;
let isVal = true;

const rand = Math.round(Math.random() * (to - from) + from);
console.log(rand);
do {
  let num = prompt("Введите число!");
  if (num === null) {
    console.log("отказ");
    break;
  }
  num = Number(num);
  if (num !== NaN) {
    console.log("это не число!");
    isVal = false;
  }
  if (num > rand) {
    console.log("Число больше!");
    isVal = false;
  }
  if (num < rand) {
    console.log("Число меньше!");
    isVal = false;
  }
  if (rand === num) {
    console.log("Вы угадали! Поздравляем!");
  }
} while (!isVal);

console.log("пробуйте еще");

// prompt("Введите число!")[стоку / null];
// number[чис];
// const x = Math.floor(Math.random() * 100) + 1;

const to = 100;
const from = 1;

const rand = Math.round(Math.random() * (to - from) + from);
console.log(rand);
do {
  let num = prompt("Введите число!");
  if (num === null) {
    console.log("отказ");
    break;
  }
  num = Number(num);
  if (Number.isNaN(num)) {
    console.log("это не число!");
    continue;
  } else if (num > rand) {
    console.log("Число больше!");
    isVal = false;
  } else if (num < rand) {
    console.log("Число меньше!");
    isVal = false;
  } else if (rand === num) {
    console.log("Вы угадали! Поздравляем!");
  }
} while (1);

console.log("пробуйте еще");

// if (Number.isNaN(num)){
//     continue;
