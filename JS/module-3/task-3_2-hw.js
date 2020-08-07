// напиши функцию countProps(obj),
// считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function (obj) {
  const keys = Object.keys(obj).length;

  return keys;
};
console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ name: "Mango", age: 2, xqsx: 33 })); // 2
