// kod const i  let ne vazi hoisitng jedino kod var odnosno kod func definisane
// aplication programming interface - API
// JSON- JavaScript Object Notation
// podaci koje dobijamo sa servera - json
// najcesce se koristi kada se salju podaci sa servera do web stranice
// sintaksa veoma slicna objektima u js-u. Objekat u Js:

// const student = {
//     ime: "Munevera",
//     prezime: "Plojovic",
//     brojIndexa: 036003,
// }
// JSON sintaksa:

// const student2 = {
//   "ime": "Munevera",
//   "prezime": "Plojovic",
//   "brojIndexa": 036003,
// }

// kako menjamo objekte
//
// const person={
// firstName: "Ahmed",
// lastName: "Krkmisevic",
// jmbg: 1312003788917
// }
//
//objekti su promenljivi (mutable)
// const x = person
// console.log(person);
// x.firstName = "Muhamed"
// console.log(x);
// console.log(person);
//
// //menja se i kod x i kod person
// bilo koja promena na x objekat ce takodje promeniti i person objekat
// ovo vazi za neprimitivne tipove podataka tj novoj promenljivoj x dodeljujemo referencu na objekat person
// a ne vrednost
// identicko izjednacavanje

// kako brisemo
// brisanje svojstva objekta se vrsi uz pomoc delete keyword-a:
// 1. delete person["jmbg"] - slabo se koristi
// 2. delete person.jmbg

// splice - odakle brise, dokle brise
// delete - ostavlja rupe i undefind kod nizova - brise i key i value
// Vrednost u objektu moze biti neki drugi objekat, niz, metoda (funkcija)...num str bool

// const osoba={
//   firstName: "Ahmed",
//   lastName: "Krkmisevic",
//   jmbg: 1312003788917
// }

// delete osoba.jmbg
// console.log(osoba);

// // JSON.stringify() metoda nam sluzi za prevodjenje objekata u  json a nakon toga json formata u string.

// const stringObjekta = JSON.stringify(osoba)

// console.log(stringObjekta);
// console.log(typeof JSON.parse(stringObjekta))

// parse obrnuta procedura od jsona tj od stringa vraca objekat
// json.parse - vraca nam objekat iz pos;atog argumenta - ako moze naravno

// Domaci zadatak :
// unutar postojeceg obj dodati nova svojstva:
// trenutna brzina : 0
// maksimalna brzina: 260
// povecanje brzine: (metoda koja uzima jedan argument (brzina vrednost za koliko km se povecala smanjila))
// smanjenje brzine: (metoda koja uzima jedna vrednost )
// zavisi koliko se poveca ili smanji prema tome stavljamo funkciju

// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),

const myCar = {
    id: 1,
    marka: "Audi",
    model: "a4",
    boja: "Crvena",
    pogon: "prednji",
    menjac: "automatski",
    kontakt: [0622222, 02033322],
    servis: {
      datum: "04,maj",
      km: 23000,
      serviser: "Pasovic",
    },
    udaran: true,
    maxBrzina: 260,
    trBrzina: 200,
  
    drive: function (brzina) {
      if (this.trBrzina + brzina > this.maxBrzina) {
        return "Ne moze, kupi bolji auto :((";
      } else {
        return `Trenutna brzinina iznosi: ${this.trBrzina+=80}`;
      }
    },
  
    brake: function (brzina) {
      return (`${this.trBrzina -= brzina} koooociii`);
    },
  
    stop: function () {
      return `${(this.trBrzina = 0)} trenutna brzina`;
    },
  };
  
  console.log(myCar.drive(80));