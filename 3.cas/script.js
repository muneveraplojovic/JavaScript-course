// // JSON.stringify() metoda nam sluzi za prevodjenje objekata u  json a nakon toga json formata u string.

// const stringObjekta = JSON.stringify(osoba)

// console.log(stringObjekta);
// console.log(typeof JSON.parse(stringObjekta))

// parse obrnuta procedura od jsona tj od stringa vraca objekat
// json.parse - vraca nam objekat iz pos;atog argumenta - ako moze naravno

//Npraviti obj sa sledecim svojstvima ime,prezime, eng, setLanguage metoda, setNickName - metoda - svaka osoba ima nadimak sastavljen od prva dva slova imena, i prva dva slova prezimena

// const person = {
//   firstName: "Munevera",
//   lastName: "Plojovic",
//   language: "Engleski",
//   setLanguage: function (lang) {
//     this.language = lang;
//     return this.language;
//   },
//   setNickName: function () {
//     (prvaDvaSlova = this.firstName.slice(0, 2)),
//       (drugaDvaSlova = this.lastName.slice(0, 2));
//     nickName = prvaDvaSlova + drugaDvaSlova;
//     return nickName;
//   },
// };

// console.log(person.setNickName());
// console.log(person.setLanguage("srpski"));
// console.log(person);
//call bind apply

//

// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova imena i prva dva slova prezimena)

// const person = {
//     firstName: "Dzenan",
//     lastName: "Kosuta",
//     language: "engleski",
//     setLanguage: function (jezik) {
//       this.language = jezik;
//       return this.language;
//     },
//     setNickName: function () {
//       let prvaDva =
//         this.firstName[0].toUpperCase() + this.firstName[1].toLowerCase();
//       let drugaDva =
//         this.lastName[0].toLowerCase() + this.lastName[1].toLowerCase();
//       return prvaDva + drugaDva;
//     },
//   };

//   console.log(person.setLanguage("bosanski"));
//   console.log(person.language);
//   console.log(person.setNickName());

// Domaci zadatak:
// 1. Zadatak

const radnik = {
  first_name: "Dzenan",
  last_name: "Kosuta",
  fullname: function () {
    return `${this.first_name} ${this.last_name}`;
  },
  adresa: {
    ulica: "Avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return `${this.ulica} ${this.broj} u ${this.grad}`

    },
  },
};

console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());
console.log(`Radnik ${radnik.fullname()} zivi u ${radnik.adresa.getAdress()} `);

// 2. Zadatak

const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: [062321552, 06563],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (pocetniDatum, krajnjiDatum) {
    },
  },
};

// console.log(automobil);
// console.log(automobil.garaza.platiZa(new Date(2022)));
//date.parse - new Date

///////////////////////////////////////////////

// 1. Zadatak
// const radnik = {
//   firstName: "Dzenan",
//   lastName: "Kosuta",
//   fullname: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   adresa: {
//     ulica: "avnoja",
//     broj: "bb",
//     grad: "Novi Pazar",
//     getAdress: function () {
//       return `${radnik.firstName} ${radnik.lastName} stanuje na adresi ${this.ulica} ${this.broj} ${this.grad}.`;
//     },
//   },
// };

// console.log(radnik.fullname());
// console.log(radnik.adresa.getAdress());

const automobil1= {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (pocetniDatum, krajnjiDatum) {
      const pocetniDan = pocetniDatum.getDate();
      const krajnjiDan = krajnjiDatum.getDate();
      const ukupnoDana = krajnjiDan - pocetniDan;
      return `Cena parkinga za dati period je ${
        ukupnoDana * this.dnevnaKarta
      }RSD`;
    },
  },
};

automobil.boja = "crvena";
console.log(automobil);

console.log(
  automobil.garaza.platiZa(new Date(2022, 10, 16), new Date(2022, 10, 21))
);

// console.log(new Date(818035920000));

// const amina = new Date(2003, 11, 8);
// const munevera = new Date(2003, 11, 13);

// const aRazlika = Date.parse(amina);
// const mRazlika = Date.parse(munevera);
// const razlika = Math.abs(aRazlika - mRazlika);
// const datumRazlike = new Date(razlika);
// console.log(datumRazlike);





