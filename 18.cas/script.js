// //const i let = promenljive koje obezbedjuju block scope
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i)), 0;
// }
// for (let i = 0; i < 1; i++) {
//   setTimeout(() => console.log("-----------")), 0;
// }

// //var = global scope promenljiva
// //zadrzava zadnju vrednost sa queue-A i nju ispisuje
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i)), 0;
// }

const promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(()=>{
    promise.then(()=>{
        console.log(2);
    })
    console.log(1);
});

promise.then(()=>{
    console.log(3);
})
