//************Conversion*************

let score = "33dsf";
let marks = null;
let roll = undefined;
// console.log(typeof score);
// used for method....
// console.log(typeof score);
// convert to
let valueNumber = Number(score);
// console.log(typeof valueNumber);

// console.log(valueNumber);

// console.log(marks);
// console.log(roll);

// "33" => 33
// "33asdf" => NaN
// true => 1; false => 0

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let isNumber = "Abir";
let booleanIsNumber = Boolean(isNumber);
// console.log(booleanIsNumber);

// 1=? True; 0 =>false
// "" => false
// "Abir" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);

//************Operation*************
let value = 4;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 ** 3);
// console.log(4 % 3);

let str1 = "Hello Abir";
let str2 = " Samanta";
let str3 = str1 + str2;
// console.log(str3);
// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(2 + "1");
// console.log("1" + 2 + 3);
// console.log(2 + 2 + "1");

// console.log(+true);
// console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1);

let gameCounter = 100;

if (gameCounter === 100) {
  console.log(`Hi Abir, Your Product Price: ${gameCounter}`);
  gameCounter++;
}
console.log(gameCounter);
