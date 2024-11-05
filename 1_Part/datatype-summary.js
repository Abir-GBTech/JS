// Primitive

// 7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.4;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anoterId = Symbol("123");

// console.log(id);
// console.log(anoterId);
// console.log(id === anoterId);

//use for "BigInt"
// const bigNumber = 4236432573567345626546n;

//Reference(Nonprimitive)
//Array, Objects, Functions

//**Array*****
const heros = ["Abir", "Arkajit", "Subir"];
console.log(`Hello, Welcome to GB Tech Service Mr.${heros[1]}`);

//**Objects*****
let myObj = {
  Name: "Abir",
  age: 24,
};

console.log(`hello ${myObj.Name} sir.`);

// //*******Function******
const myFunction = function () {
  console.log("Hello Subir");
};
myFunction();

// another function.....
const myanotherFunction = function (name) {
  console.log("Hello " + name);
};
myanotherFunction("Arkajit");
// console.log(typeof bigNumber);

// //+++++++++++++++++++++++++++++++++++++++++++++++
// //Stack(Primitive), Heap(non--Primitive)

// //++++++++++++++++ Stack +++++++++++++++++++++++++++++++
let myName = "Abir";

let anotherName = myName;
// console.log(anotherName);
anotherName = "Subir";
console.log(anotherName);
console.log(myName);

// let userOne = {
//   email: "abirsamnata756@gmail.com",
//   name: "Abir Samanta",
// };

// //++++++++++++++++ Heap +++++++++++++++++++++++++++++++
// //Example1................

// let userTwo = userOne;
// userTwo.email = "subirsdfjk@gmail.com";
// console.log(userTwo.email);
// console.log(userOne.email);

// //Example2.........................

let game = {
  name: "cricket",
};

let boy = {
  name: "Ram",
};
game.name = boy.name;
console.log(game.name);
console.log(boy.name);
