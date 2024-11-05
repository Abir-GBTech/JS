//array
const myArray = [0, 1, 2, 3, 4, 5, "Abir"];
console.log(myArray[6]);

const myFriend = ["Subir", "Arkajit", "Saurabh"];
const myArr = new Array(0, 1, 2, 3, 4, 5);
// console.log(myArr[2]);

//array method

myArr.push(6);
myArr.push(7);
// myArr.shift();
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// myArr.shift();
// console.log(myArr);

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);
console.log(myArr);

// slice, splice ********

// console.log("A", myArr);
// const myArr2 = myArr.slice(1, 3);
// console.log(myArr2);
// console.log("B", myArr);

const myArr3 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myArr3);
