//{}- scopes

//what is block/global scopes?
var c = 400;
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
//can't be used var

let a = 600;
if (true) {
  let a = 10;
  const b = 20;

  //console.log("Inner Value", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Abir";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  two();
  // console.log(username);
}

one();

if (true) {
  const username = "Abir ";
  if (username === "Abir ") {
    const website = "youtube";
    console.log(username + website);
  }
  console.log(username);
}

// console.log(username);

//*************** Interesting ************
//Two type write function.
console.log(add1(5));

function add1(num) {
  return num + 1;
}

/////////////*************************** */
//console.log(addTwo(6));
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(6));

function addThree(number) {
  return number + 2;
}
console.log(addThree(10));
