"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";

let parol = prompt(" Введите пароль!", "");

if (parol === ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
} else if (parol == null) {
  console.log("отменено пользователем!");
} else {
  console.log("Доступ запрещен, неверный пароль!");
}

alert(parol);
