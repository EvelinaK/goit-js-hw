// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  console.log(input.value.length);
  input.classList.add("valid");
  input.classList.add("invalid");
  if (input.dataset.length > input.value.length) {
    input.classList.replace("valid", "invalid");
  }
  if (input.dataset.length == input.value.length) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.replace("valid", "invalid");
  }
});
