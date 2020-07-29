// напиши функцию countProps(obj),
// считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function (obj) {
  const keys = Object.keys(obj);
  let total = 0;
  for (let i = 0; i < keys.length; i++) {
    total = keys.length;
  }

  return total;
};
console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2
