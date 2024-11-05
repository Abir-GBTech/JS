const user = {
  username: "Abir",
  Price: 1000,
  Wecomemassage: function () {
    console.log(`${this.username}, Welcome to Website`);
    console.log(this);
  },
};

// user.Wecomemassage();
// user.username = "sam";
// user.Wecomemassage();

// console.log(this);

// Interview quetion-- what is global object in browser
// answer-- Window object

// function chai() {
//   let username = "Abir Samanta";
//   console.log(this.username);  // this keyword can't be used in function
// }
// chai();

// const chai = function () {
//   let username = "Abir Samanta";
//   console.log(this.username);
// };

// const chai = () => {
//   let username = "Abir Samanta";
//   console.log(this);
// };
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(4, 6));

// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(4, 6));

// const addTwo = (num1, num2) => ({
//   username: "Abir Samanta",
// });
// console.log(addTwo(4, 6));

// const myArr = [1, 3, 5, 7, 8];
// myArr.forEach();

const chai = () => {
  let username = "Abir Samanta";
  console.log(username);
};
chai();

number = () => {
  console.log("Saurabh");
};
number();
