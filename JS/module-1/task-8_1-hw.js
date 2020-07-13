// Написать программу, которая запрашивает пароль у пользователя. Если пароль пользователя не соответствует критериям:

// Пароль не должен быть пустым
// Длина пароля минимум 8 символов
// В пароле должна быть хотя бы 1 буква в верхнем регистре
// В пароле должен быть хотя бы 1 символ
// В пароле должен быть хотя бы 1 число
// Если пароль не соответсвует критериям - выводить ошибки и начинать ввод пароля сначала. Есть 5 попыток.

let attempts = 0;
const MAX_ATTEMPTS_AMOUNT = 5;
let flag = false;
do {
  console.log("ПОПЫТКА № ", attempts + 1);
  let password = prompt("Введите пароль!");

  if (password === null) {
    console.log("отмена!");
    break;
  }
  if (attempts <= MAX_ATTEMPTS_AMOUNT) {
    attempts++;
  } else {
    alert("Перезагрузите страницу, чтобы повторить попытку сначала.");
    break;
  }

  if (password.length === 0) {
    console.log("Пароль пустой.");
    continue;
  }
  if (password.length <= 8) {
    console.log("Длина пароля должна быть  минимум 8 символов!");
    continue;
  }

  //   Ропралоплопло === ропралоплопло
  //   (password !== ["A-Z"].test(password))
  //   const has_letters = /[A-Z]/.test(password);
  if (password === password.toLowerCase()) {
    console.log("В пароле должна быть хотя бы 1 буква в верхнем регистре");
    continue;
  }
  if (!/[0-9]/.test(password)) {
    console.log("В пароле должен быть хотя бы 1 число!");
    continue;
  }

  if (!/[!@#$%^&*]/.test(password)) {
    console.log("В пароле должен быть хотя бы 1 спец символ");
    continue;
  }
  alert("Пароль успешно установлен!");
  flag = true;
} while (flag);

// // [A-Z]+
// ?=.*[!@#$%^&*]
