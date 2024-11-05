const score = 400;
// console.log(score);

const balance = new Number(300);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber = 123.78965;
console.log(otherNumber.toPrecision(3));

const moreNumber = 1000000;
// console.log(moreNumber.toLocaleString());
// console.log(moreNumber.toLocaleString("en-IN"));

//**************************** Maths****************

// console.log(Math);
//same log print in console and practice all method for math library

//convert to negetive to positiove
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.2));
console.log(Math.max(3, 10, 23, 40));
console.log(Math.min(12, 10, 23, 40, 2));
console.log(Math.random());
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;
Math.random() * (max - min + 1) + min;
