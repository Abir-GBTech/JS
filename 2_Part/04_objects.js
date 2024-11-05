const RiderMater = new Object(); // user another method for object declare
console.log(RiderMater);

// RiderMater.id = "14536";
// RiderMater.user = "Abir";
// RiderMater.isLoggedin = false;
// console.log(RiderMater);

// const regularUser = {
//   email: "abir@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "abir",
//       lastname: "samanta",
//     },
//   },
// };

// console.log(regularUser.fullname.userfullname.firstname);

const obje1 = { 1: "a", 2: "b", 3: "i", 4: "r" };
const obje2 = { 5: "s", 6: "u", 7: "b", 8: "i", 9: "r" };
// const obje3 = { obje1, obje2 };
// const obje3 = Object.assign({}, obje1, obje2); // correct syntax
// const obje4 = Object.assign(obje1, obje2);
// console.log(obje3);
// console.log(obje4);

const obje5 = { ...obje1, ...obje2 };
// console.log(obje5);

const userDetails = [
  {
    id: "001",
    Firstname: "Abir",
    Lastname: "Samanta",
    Phone: 8972022507,
  },
  {
    id: "002",
    Firstname: "Subir",
    Lastname: "Samanta",
    Phone: 7047697305,
  },
  {
    id: "003",
    Firstname: "Arkajit",
    Lastname: "Roy",
    Phone: 9641456005,
  },
];

// console.log(userDetails[1].Firstname);
// console.log(Object.keys(obje1));
// console.log(Object.values(obje1));
// console.log(Object.entries(obje1));
// console.log(obje1.hasOwnProperty("1")); // "1" have in obje1 true/false??

const course = {
  coursename: "English",
  code: "Eng111",
  teachername: "Sandip",
};

const { coursename } = course;
const { coursename: name } = course; // destracture course to change name
console.log(name);

// const navbar = ({ company }) => {}; // destracture company to navber
// navbar((company = "GB Tech"));
