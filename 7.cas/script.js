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