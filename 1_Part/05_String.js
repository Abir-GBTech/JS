const name = "Abir";
console.log(name.indexOf("i"));

const pNumber = 8972022507;
//console.log(name + pNumber + " Value");
console.log(`Hello my name is ${name} and my phone number is ${pNumber}`);

const myName = new String("AbirSamanta");
console.log(myName[0]);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt([2]));
console.log(myName.indexOf("r"));

const myNameSub = myName.substring(0, 3);
console.log(myNameSub);

const anotherString = myName.slice(-9, 7);
console.log(anotherString);

const newString = "  Abir-Subir ";
console.log(newString.trim());

console.log(newString.replace("-", ","));

console.log(newString.split("-"));
