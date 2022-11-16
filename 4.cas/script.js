//call, bind, apply - funkcije koje koristimo u slucajevima kada zelimo  da se neka funkcija primeni na objekat izvan funkcije
//call - kada koristimo neku metodu u nekom totalno drugom objektu
//sintaksa - prvo pozivammo funkciju, pa kao argument stavljamo objekat od kojeg zelimo da se primeni data metoda
//nakon toga eventualne argumente ako data funkcija zahteva]
//apply - je isto kao call, ali se razlikuje samo kad ima argumente
//vrlo je slicno call-u,  s tim sto se argumenti funkcije stavljaju unutar niza
//bind ()- funkcionise na nacin da prvo dodelimo datu funkciju sa objektom nekoj promenljivoj, i onda tu promenljivu koja predstavlja funkciju pozovemo sa potrebnim argumentima

//call metoda
// const person = {
//   firstName: "Munevera",
//   lastName: "Plojovic",
//   date: new Date(2003, 11, 13),
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(person.fullName());

// const person2 = {
//   firstName: "Amina",
//   lastName: "Besirovic",
//   date: new Date(2003, 1, 19),
// };
// console.log(person.fullName.call(person2));

// //-----------------------------------------
// const restoran = {
//   hrana: "pizza",
//   gosti: "zadovoljni",
//   lokacija: "Uzi centar grada",
// };

// function poruka(arg1, arg2) {
//   return `specijalite naseg restorana ${this.hrana} i mozemo reci da su gosti ${this.gosti}. 
//     Nas restoran se nalazi u ${this.lokacija} u ${arg1}, ${arg2}`;
// }

// const restoran2 = {
//   hrana: "supa",
//   gosti: "zgrozeni",
//   lokacija: "Mur",
// };

// console.log(poruka.call(restoran, "Novi Pazar", "Srbija"));
// console.log(poruka.call(restoran2, "Novi Sad", "Srbija"));
// console.log(poruka.apply(restoran, ["Minhen", "Nemacka"]));

// //kod bind prvo moramo da dodelimo na neku promenljvu pa posle dajemo argumente
// const bindFunk = poruka.bind(restoran2);
// //dodjemo do dunk pozovemo bind kazemo na mkoji obj ce da se odnsoi
// console.log(bindFunk("Sarajevo", "BiH"));
// //

/////////////////////////////////////////

// call(), apply(), bind() su funkcije koje koristimo u slucajevima kada zelimo da se neka funkcija primeni na objekat koji se izvan date funkcije.
// Prodjimo svaku od njih kroz sledeci primer:

const person = {
  firstName: "Muhamed",
  lastName: "Krkmisevic",
  dateOfBirth: new Date(2005, 5, 13),
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());

const person2 = {
  firstName: "Muusa",
  lastName: "Zecirovic",
  dateOfBirth: new Date(2006, 8, 12),
};
console.log(person2);

// Sintaksa za koriscenje ovih funkcija je:
// PRVO IDE POZIVANJE FUNKCIJE, PA ONDA KAO ARGUMENTI FUNKCIJE IDU:
// 1. OBJEKAT NA KOJI ZELIMO DA SE PRIMENI DATA METODA;
// 2. EVENTUALNE ARGUMENTE FUNKCIJE (ako funkcija po definiciji zahteva).

console.log(person.fullName.call(person2));

const restoran = {
  hrana: "pizza",
  gosti: "zadovoljni",
  lokacija: "Uzi centar grada",
};

function poruka(grad, drzava) {
  return `Vecerasnji specijalitet naseg restorana je ${this.hrana}. I sa ponosom mozemo reci da su gosti ${this.gosti}. Nas restoran se nalazi u ${this.lokacija} u ${grad}, ${drzava}`;
}

const restoran2 = {
  hrana: "supa",
  gosti: "zgrozeni",
  lokacija: "Mur",
};

console.log(poruka.call(restoran, "Beograd", "Srbija"));
console.log(poruka.call(restoran2, "Novi Pazar", "Srbija"));

// apply() je vrlo slicna, s tim sto se argumenti funkcije stavljaju unutar niza.

console.log(poruka.apply(restoran, ["Novi Pazar", "Srbija"]));

// bind() funkcionise na nacin da prvo dodelimo datu funkciju sa objektom nekoj promenljivoj i onda tu promenljivu (funkciju) pozovemo sa potrebnim argumentima.

const bindFunction = poruka.bind(restoran2);
console.log(bindFunction("Sarajevo", "Bosna i Hercegovina"));
