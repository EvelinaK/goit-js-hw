// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     console.log(this.items);
//     inventory.items.push(itemName);
//   },

//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);
//     inventory.items = inventory.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    debugger;
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const inventory2 = {
  items: ["Knife", "Gas mask", "Kreal"],
  add(itemName) {
    alert(itemName);
    alert(this.items);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
  console.log(inventory2.items);
};

invokeInventoryAction("Medkit", inventory2.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

// let a = [1, 2, 3, 4, 5].splice(2, 2, 6, 7);
// console.log(a);

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log(this);
//     this.color = color;
//   };

//   const changeColor2 = function (color1, color2) {
//     this.color1 = color1;
//     this.color2 = color2;
//   };
//   return changeColor, changeColor2;
// };

// const hat = {
//   color: "blue",
//   changeColor: makeChangeColor(),
//   changeColor2: makeChangeColor(),
// };

// hat.changeColor("orange").changeColor2("11", "red");
// changeColor("orange");
