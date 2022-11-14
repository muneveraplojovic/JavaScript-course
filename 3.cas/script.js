// // JSON.stringify() metoda nam sluzi za prevodjenje objekata u  json a nakon toga json formata u string.

// const stringObjekta = JSON.stringify(osoba)

// console.log(stringObjekta);
// console.log(typeof JSON.parse(stringObjekta))

// parse obrnuta procedura od jsona tj od stringa vraca objekat
// json.parse - vraca nam objekat iz pos;atog argumenta - ako moze naravno

//Npraviti obj sa sledecim svojstvima ime,prezime, eng, setLanguage metoda, setNickName - metoda - svaka osoba ima nadimak sastavljen od prva dva slova imena, i prva dva slova prezimena

const person = {
  firstName: "Munevera",
  lastName: "Plojovic",
  language: "Engleski",
  setLanguage: function (lang) {
    this.language = lang;
    return this.language;
  },
  setNickName: function () {
    (prvaDvaSlova = this.firstName.slice(0, 2)),
      (drugaDvaSlova = this.lastName.slice(0, 2));
    nickName = prvaDvaSlova + drugaDvaSlova;
    return nickName;
  },
};

console.log(person.setNickName());
console.log(person.setLanguage("srpski"));
console.log(person);
//call bind apply


