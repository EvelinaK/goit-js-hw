// напиши функцию countProps(obj),
// считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function (obj) {
  const keys = Object.keys(obj);
  debugger;
  let total = 0;
  for (let i = 0; i < keys.length; i++) {
    total = keys.length;
  }
  console.log(total);
  return;
};
console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2
