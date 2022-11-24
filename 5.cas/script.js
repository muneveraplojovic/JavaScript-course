// const automobil = {
//   marka: "Audi",
//   model: "Q7",
//   boja: "Bela",
//   pogon: "quattro",
//   menjac: "Automatik",
//   km: 240000,
//   vlasnik: ["062321552", "063930630"],
//   garaza: {
//     parking: "JKP Servis",
//     vikend: "od 17 free",
//     satnaKarta: 50,
//     dnevnaKarta: 200,
//     mesecnaKarta: 2000,
//   },
// };
// // Napraviti funkciju koja ce povecati vrednost satne, dnevne i mesecne karte za po 20%.
// // Za bilo koji objekat koji ima properties: satnaKarta, dnevnaKarta i mesecnaKarta.
// // Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga.

// function povecajZa20() {
//   this.satnaKarta += this.satnaKarta * 0.2;
//   this.dnevnaKarta += this.dnevnaKarta * 0.2;
//   this.mesecnaKarta += this.mesecnaKarta * 0.2;
//   return {
//     satnaKarta: this.satnaKarta,d
//     dnevnaKarta: this.dnevnaKarta,
//     mesecnaKarta: this.mesecnaKarta,
//   };
// }

// console.log(povecajZa20.call(automobil.garaza));
// console.log(automobil);

////////////////////////////////////////////////////////////////////////////

// const abudrahman = "Abdurahman";
// const selmanovic = "Selmanovic";
// const godine = 14;
// const skola = "Bratstvo";

// const person = {
//   abudrahman: abudrahman,
//   selmanovic: selmanovic,
//   godine: godine,
//   skola: skola,
// };
// console.log(person);

// // Ako imamo isti name i value:
// const person2 = {
//   abudrahman,
//   selmanovic,
//   godine,
//   skola,
// };
// console.log(person2);
// // Destructuring:
// const automobil = {
//   marka: "Audi",
//   model: "Q7",
//   marka: "Bela",
// };
// console.log(automobil.model);

// // const marka = automobil.marka
// const { marka, model } = automobil; // Destructuring
// console.log(marka, model);

//////////////////////////////////////////////////////////////////

// const godine = [
//   { starost: 19 },
//   { starost: 19 },
//   { starost: 19 },
//   { starost: 18 },
//   { starost: 16 },
//   { starost: 18 },
//   { starost: 14 },
//   { starost: 17 },
// ];

// // Napraviti novi niz(punoletni) koji ce sadrzati one elemente (objekte) cija je starost veca od 17.
// const punoletni = godine.filter((element) => element.starost > 17);
// console.log(punoletni);

// // Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.

////////////////////////////////////// 
//homework

// Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.

// const niz = [
//     {
//       ime: "Vahid",
//       prezime: "Gasanin",
//       starost: 19,
//       bojaOciju: "braon",
//       bojaKose: "braon",
//       polozenC: true,
//     },
//     {
//       ime: "Imran",
//       prezime: "Hazirovic",
//       starost: 20,
//       bojaOciju: "braon",
//       bojaKose: "plava",
//       polozenC: true,
//     },
//     {
//       ime: "Ahmed",
//       prezime: "Krkmisevic",
//       starost: 19,
//       bojaOciju: "plava",
//       bojaKose: "crna",
//       polozenC: false,
//     },
//     {
//       ime: "Muhamed",
//       prezime: "Krkmisevic",
//       starost: 14,
//       bojaOciju: "braon",
//       bojaKose: "crna",
//       polozenC: false,
//     },
//     {
//       ime: "Abdurahman",
//       prezime: "Selimovic",
//       starost: 16,
//       bojaOciju: "braon",
//       bojaKose: "crna",
//       polozenC: false,
//     },
//     {
//       ime: "Amina",
//       prezime: "Besirovic",
//       starost: 18,
//       bojaOciju: "plava",
//       bojaKose: undefined,
//       polozenC: false,
//     },
//     {
//       ime: "Amina",
//       prezime: "Marovac",
//       starost: 19,
//       bojaOciju: "braon",
//       bojaKose: "braon",
//       polozenC: true,
//     },
//   ];
  
//   const filteredStudents = (par) => {
//     const filtered = par.filter(
//       (student) => student.bojaOciju === "braon" && student.polozenC === false
//     );
//     return filtered;
//   };
  
//   console.log(filteredStudents(niz));
  
// //   person = {
// //     ime: "Amina",
// //     prezime: "Besirovic",
// //     starost: 18,
// //     bojaOciju: "plava",
// //     bojaKose: undefined,
// //     polozenC: false,
// //   };
  
// //   const { ime, starost, polozenC } = person;
// //   console.log(ime);
// //   console.log(starost);
// //   console.log(polozenC);