// function sayMyName(name) {
//   console.log("A for " + name);
//   console.log("B");
//   console.log("I");
//   console.log("R");
// }
// // sayMyName("Abir");

// //sayMyName();
// // sayMyName- Refference ****
// //sayMyName() - Execution **

// function addTwoNumber(number1, number2) {
//   // (number1,number2) is Parameters
//   console.log(number1 + number2);
// }
// // addTwoNumber(2, 5);

// function addTwoNumber(number1, number2) {
//   // (number1,number2) is Parameters
//   let Result = number1 + number2;
//   console.log("Abir");

//   return number1 + number2;
//   // console.log("Abir");  ----  This log is not print.
// }
// const Result = addTwoNumber(3, 4); // (3,4) is Arguments

// console.log("Result Two Numbers", Result);

// function userLoggedIn(username) {
//   //default value set - function userLoggedIn(username="Arkajit")
//   if (!username) {
//     //   if (username === undefined) {
//     console.log("Please Enter Your User Name.");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(userLoggedIn());
// // console.log(userLoggedIn("Abir"));

// // function calculateCartPrice(...num1) {
// function calculateCartPrice(val1, val2, ...num1) {
//   //function calculateCartPrice(...num1)----"..." use the Rest and Spread Operators
//   //   return `Your Product Price ${num1}`;
//   return num1;
// }
// console.log(calculateCartPrice(200, 400, 500, 600));

// const user = {
//   userName: "Abir",
//   Price: "200",
// };

// function handelObject(anyObject) {
//   console.log(
//     `User Name is ${anyObject.userName} and Price is ${anyObject.Price}`
//   );
// }
// // handelObject(user);
// // handelObject({
// //   userName: "Sam",
// //   Price: 500,
// // });

// const myNewArray = [100, 200, 300, 400];
// function returnSecondValue(getArray) {
//   return `My Product Price - ${getArray[1]}`;
// }

// // console.log(returnSecondValue(myNewArray));
// // console.log(returnSecondValue([300, 400, 600]));

// function Student(Id, fName, lName, Add) {
//   const details = `My name is ${fName} ${lName}. My ID is ${Id} and I live in ${Add}.`;

//   return details;
// }

// console.log(Student("st001", "Abir", "Samanta", "Kolkata"));

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("Abir", "Samanta", 30, "Red");
console.log(
  `My Name is ${myFather.firstName} ${myFather.lastName}, age: ${myFather.age}`
);

if (30 == myFather.age) {
  console.log(
    `My Name is ${myFather.firstName} ${myFather.lastName}, My age 30 above`
  );
} else {
  console.log("Age Does not Matched.");
}
