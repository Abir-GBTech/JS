//if
const isUserloggedIn = true;
const temperature = 41;
// if (temperature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temerature is greater than 50");
// }
// if (2 === "2") {
//   console.log("Executed");
// }

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User:  ${power}`);
// }

// const balance = 1000;
// if (balance > 500) console.log("test");

// const balance = 1000;
// if (balance < 500) {
//   console.log("less than 500.");
// } else if (balance < 750) {
//   console.log("less than 750.");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1100");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User Logged in");
}