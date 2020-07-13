// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя свойства.
//  Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
console.table(products);

const getAllPropValues = function (arr, prop) {
  let newArr = [];
  // for(var i=0; i < country.cities.length; i++)
  // document.write(country.cities[i].name + "<br/>");

  //const values = Object.values(arr); // ["name", "stars", "capacity"]

  for (const value of arr) {
    if (prop == "price") {
      newArr.push(value.price);

      //  console.log(newArr);
      // console.table(value.price);
    } else if (prop == "name") {
      // console.table(value.name);
      newArr.push(value.name);
    } else if (prop == "quantity") {
      //console.table(value.quantity);
      newArr.push(value.quantity);
    } else {
      console.table(newArr);
    }
    // array.push(value.name);
    // console.table(value.price);
    // array.push(value.price);

    // console.table(value.quantity);
    // array.push(value.price);
    // for (var i = 0; i < value.length; i++) {
    //   console.log(value[i].name);
    // }
  }
  return newArr;
  // прохожу циклом по всем элеметам массива
  // и внутри цикла присваивать обьекту итый элемент массива

  // entries.forEach((entry) => {
  //   let key = entry[0];
  //   let value = entry[1];
  //   console.log(`${key}: ${value}`);
  // });
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
console.log(getAllPropValues(products, "price")); // []

// const users = [
//   {id: 1, name: "John", isAdmin: true},
//   {id: 2, name: "Smith", isAdmin: true},
//   {id: 3, name: "David", isAdmin: false}
// ];
// console.log (" - For in - ");
// for (let i in users) {
//   console.log(users[i]);
// }
// console.log (" - For of - ");
// for (let i of users) {
//    console.log(i);
// }

// - For in -
// { id: 1, name: "John", isAdmin: true }
// { id: 2, name: "Smith", isAdmin: true }
// { id: 3, name: "David", isAdmin: false }
// - For of -
// { id: 1, name: "John", isAdmin: true }
// { id: 2, name: "Smith", isAdmin: true }
// { id: 3, name: "David", isAdmin: false }

// console.log (" - For in - ");
// for (let i in users[0]) {
//     console.log(i);
// }
// - For in -
// id
// name
// isAdmin

//[1300]
