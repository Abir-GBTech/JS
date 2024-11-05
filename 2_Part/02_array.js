const Myhero = ["baba", "maa", "bhai", "dadabhai"];
const Myhobbi = ["Cricket", "footbal", "movie"];

// Myhero.push(Myhobbi);
// console.log(Myhero);
// //Myhobbi is push an array element.

// console.log(Myhero[4]);
// console.log(Myhero[4][2]);

// push and concat same type of method************

// Myhero.concat(Myhobbi);
// console.log(Myhero);

// const allMyhero = Myhero.concat(Myhobbi);
// console.log(allMyhero);

// spread operator
const all_new_hero = [...Myhero, ...Myhobbi];
console.log(all_new_hero);

// flat operator************
const another_arr = [1, 4, 6, [7, 8, 10], 11, [12, [14, 20], 24, 30]];
const real_another_arr = another_arr.flat(Infinity);
console.log(real_another_arr);

console.log(Array.isArray("AbirSamanta"));
console.log(Array.from("AbirSamanta"));
// console.log(Array.from({ name: "Abir" })); // interesting interview question

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
