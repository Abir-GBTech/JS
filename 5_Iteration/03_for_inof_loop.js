//for of
// ["","","",""]
// [{},{},{},{}]

const myArray = [1, 2, 3, 4, 5];
for (const value of myArray) {
  //   console.log(value);
}

// const hero = "Hello, welcome hero";
// for (const Index of hero) {
//   console.log(Index);
// }

const myObject = {
  firstName: "Abir",
  lastName: "Samanta",
  age: 24,
  add: "East Medinipur",
};

for (const key in myObject) {
  console.log(`${key} is: ${myObject[key]}`);
}

const programming = ["JS", "C++", "PYTHON"];
for (const key in programming) {
  console.log(programming[key]);
}

// const map = new map();
// map.set("IN", "INDIA");
// map.set("USA", "UNITED STATE OF AMERICA");
// map.set("FR", "FRANCE");
// map.set("IN", "INDIA");
// for (const key in object) {
//   console.log(key);
// }
//Can't used iterative in this map.
