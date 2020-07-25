"use strict";

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
const chinaPrice = 100;
const chiliPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaikaPrice = 120;
const country = prompt("в какую страну нужна доставка?");
if (country !== null) {
  switch (country.toLowerCase()) {
    case "china":
      console.log(`Доставка в ${country} будет стоить ${chinaPrice} кредитов`);
      break;

    case "chili":
      console.log(`Доставка в ${country} будет стоить ${chiliPrice} кредитов`);
      break;

    case "australia":
      console.log(
        `Доставка в ${country} будет стоить ${australiaPrice} кредитов`
      );

      break;

    case "india":
      console.log(`Доставка в ${country} будет стоить ${indiaPrice} кредитов`);

      break;

    case "jamaika":
      console.log(
        `Доставка в ${country} будет стоить ${jamaikaPrice} кредитов`
      );
      break;

    default:
      console.log("В вашей стране доставка не доступна");
  }
}
