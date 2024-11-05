const myCording = ["JS", "PYTHON", "JAVA", "C++"];
// const Values = myCording.forEach((Item) => {
//   console.log(Item);
//   return Values;
// });
// console.log(Values);

//Used for Filter
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers = myNumbers.filter((num) => num > 4);
// console.log(newNumbers);

// Used Another Process with Return keywords.........

const newNumbers = myNumbers.filter((num) => {
  return num > 4;
});
console.log(newNumbers);
