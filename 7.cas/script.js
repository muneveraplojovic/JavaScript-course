//Napraviti funkciju koja nam vraca novi niz koji nema duplikate
//nizovi mogu da sadrze duplikate

// //1 nacin
// const array = [12, 1, 3, 2, 3, 4, 6, 4];

// function eraseDuplicates(arr) {
//   const new1 = [];
//   arr.forEach((num) => {
//     if (!new1.includes(num)) {
//       new1.push(num);
//     }
//   });
//   return new1;
// }

// console.log(eraseDuplicates(array));

//2nacin

//3 nacin

// const array = [12, 1, 3, 2, 3, 4, 6, 4];
// function eraseDuplicates(arr) {
//   let newArr = arr.filter((el) => {
//     !newArr.includes(el);
//   });
//   return newArr;
// }
// console.log(eraseDuplicates(array));

//ne raadiiii

//Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budzet

// const movies = [
//   { title: "Inception", rating: 8, budget: "230M" },
//   { title: "Interstellar", rating: 5, budget: "240M" },
//   { title: "Godfather", rating: 9, budget: "300M" },
//   { title: "Home alone", rating: 4, budget: "30M" },
// ];

// function returns(mov) {
//   const getTb = mov.map((el) => {
//     return {
//       title: el.title,
//       budget: el.budget,
//     };
//   });
//   return getTb
// }

// console.log(returns(movies));

////////////////////////////////////

//  2. Zadatak
// Complete the code for the squareList function using any combination
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// const niz = [-3, 4.8, 5, 3, -3.2];
// const squareList = (arr) => {
//   const filtered = arr.filter(function (number) {
//     return number > 0 && number % 1 === 0;
//   });
//   const squares = filtered.map(function (number) {
//     return number ** 2;
//   });
//   return squares;
// };

// console.log(squareList(niz));
// const a = 14;
// const b = 14.15;
// // console.log(a % 1 === 0);
// // console.log(b % 1 === 0);

// // Number.isInteger() metoda varaca boolean u zavisnosti od toga da li je argument date metode ceo broj ili nije.

// console.log(Number.isInteger(a));
// console.log(Number.isInteger(b));
