// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log(3);
// }, 1000)
// console.log(4);
// setTimeout(()=>{
//     console.log(5);
// }, 1000)

//Promise - je js objekat koji predstavlja mesto za rezultate async func sve dok traje izvrsavanje async operacije.
//catch, finally, then

// const imatiCas = new Promise((resolve, reject) => {
//   const res = 200;
//   if (res === 200) {
//     resolve();
//   } else {
//     reject();
//   }
// });

//imatiCas.then()
//neka se uradi
//imatiCas.catch()
//uhvatiti error
//imatiCas.finally()
//resolve-then
//reject-catch

// imatiCas
//   .then(() => {
//     console.log("radiii, rec je odrzana, imali smo cas");
//   })
//   .catch(() => {
//     console.log("greeeeska");
//   })
//   .finally(() => {
//     console.log("poruka koja se ispituje u svakom slucaju");
//   });

const isArray = new Promise((resolve, reject) => {
  const array = ["nesto", 5, false, "?", 45];
  if (Array.isArray(array)) {
    resolve();
  } else {
    reject();
  }
});

isArray
  .then(() => {
    console.log("Array is array :)");
  })
  .catch(() => {
    console.log("Greska :(");
  });
