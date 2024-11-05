// singleton

//object literals
const mysym = Symbol("key1");

const jsuser = {
  name: "Abir",
  "full name": "Subir Samanta",
  mysym: "mykey1", // key/symbol print correct syntax [mysym]: "mykey1"
  age: 24,
  location: "Kolkata",
  email: "abir@gmail.com",
  isloggedinDay: false,
  lastLoginDays: ["Monday", "saturday"],
};
// console.log(jsuser.email); //full name can't print this format
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(`Holiday is ${jsuser.lastLoginDays[1]}`);

// console.log(jsuser[mysym]);

jsuser.email = "subir@gmail.com";

// Object.freeze(jsuser); // freeze method used for , can't be changed this array
jsuser.email = "subir@microsoft.com";
// console.log(jsuser);

jsuser.greeting = function () {
  console.log("Hello, Abir Samanta");
};

console.log(jsuser.greeting);
console.log(jsuser.greeting());

jsuser.greeting1 = function () {
  console.log(`Hello, ${this["full name"]}`);
};

console.log(jsuser.greeting1());
