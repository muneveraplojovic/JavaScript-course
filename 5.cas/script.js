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

//////////////////////////////////////homework

const person1 = [
  { name: "Munevera" },
  { lastName: "Plojovic" },
  { age: 18 },
  { bojaOciju: "braon" },
  { bojaKose: "braon" },
  { polozenC: true },
];

const person2 = [
  { name: "Munevera" },
  { lastName: "Plojovic" },
  { age: 18 },
  { bojaOciju: "braon" },
  { bojaKose: "braon" },
  { polozenC: true },
];

const person3 = [
  { name: "Munevera" },
  { lastName: "Plojovic" },
  { age: 18 },
  { bojaOciju: "braon" },
  { bojaKose: "braon" },
  { polozenC: true },
];

const person4 = [
  { name: "Munevera" },
  { lastName: "Plojovic" },
  { age: 18 },
  { bojaOciju: "braon" },
  { bojaKose: "braon" },
  { polozenC: true },
];

function newObject(){
  ispit = this.polozenC
  if(ispit){
    return "polozeeennn ccccc"
  }
}
newObject()
