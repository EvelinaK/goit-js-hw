// Есть пустой массив numbers.
//  Заполнить его 20 случайными числами от -1000 до 1000.
// Найти сумму, среднее значение, максимальное и минимальное число.

let arr1 = [];
let sum = 0;
let average;
for (let i = 0; i < 20; i++) {
  arr1.push(Math.round(Math.random() * 2001) - 1000);
  sum += arr1[i];
}

//0-100
//0.6==1
//0-0.5=0
//0.5-1.5=1
//
//0-2

document.write("<br>" + arr1);
document.write("<br>" + sum);
document.write("<br>" + (average = Math.round(sum / arr1.length)));
document.write("<br>" + Math.max.apply(null, arr1));
document.write("<br>" + Math.min.apply(null, arr1));
