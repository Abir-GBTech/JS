//for each loop

//Used arrow function
const myArray = ["Abir", "Arkajit", "Subir", "Saurabh", "Suman"];
// myArray.forEach((element) => {
//   console.log(element);
// });

//Used Normal Function
// const myArray = ["Abir", "Arkajit", "Subir", "Saurabh", "Suman"];
// myArray.forEach(function (element) {
//   console.log(element);
// });

// function printMe(myArray) {
//   console.log(myArray);
// }
// myArray.forEach(printMe);

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "JS",
  },
  {
    languageName: "Java",
    languageFileName: "Java",
  },
  {
    languageName: "Python",
    languageFileName: "PY",
  },
  {
    languageName: "C++",
    languageFileName: "C",
  },
];
myCoding.forEach((Item) => {
  console.log(Item.languageName);
});
