"use strict";
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (const array of matrix) {
//     console.log("ARRAY:", array);
//     let counter = 1;

//     for (const elem of array) {
//         console.log(`ELEM-${counter++}:`, elem);
//     }
// }

// Подсчет сумм рядов
// var arr = [1, 2, 23, 3];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// document.write(sum);
let arr1 = new Array();
let arr2 = new Array();
let arr3 = new Array();
// for(let i=0;i < arr.length; i++);
let arr = new Array(arr1, arr2, arr3);

for (let x = 0; x < arr.length; x++) {
  for (var j = 0; j < arr[x].length; j++) {
    document.write(arr[x][j] + "");
  }
  document.write("@");
}

var arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let j = 0; j < arr2.length; j++) {
  for (let n = 0; n < arr2.length; n++) {
    if (n === arr2.length - 1) document.write(arr2[j][n]);
    else document.write(arr[j][n] + ", ");
  }
  document.write("<br>");
}
