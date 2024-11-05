//Immediately Invoked Function Expressions(IiFE)

// function one() {
//   console.log("Abir");
// }
// one();

// (function one() {
//   console.log("Abir");
// })();

function two(name) {
  //Named Iife
  console.log(`My name is ${name}`);
}
two("Subir");

//another way of function calling

((name) => {
  //Unnamed Iife
  console.log(`My name is ${name}`);
})("Abir");

(function details(name) {
  console.log(`Hello ${name}, Wellcome to GB TECH SERVICE`);
})("Abir");
