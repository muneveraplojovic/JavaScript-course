//

const person = {
  ime: "Munevera",
  prezime: "Plojovic",
  polozenC: true,
  godine: 18,
};

const osoba = {
  ime: "Munevera",
  prezime: "Plojovic",
  polozenC: true,
  godine: 18,
};
// console.log(person);
//freeze() - immutabile - cini objekat nepromenljvim
//delete sluzi za brisanje i ne pravi rupe kao sto to radi kod array-a
//person.godine=19

//seal()-nije dozvoljeno ni menjanje ni brisanje elemenata
// Object.seal(person)

//Object.keys() - vraca niz keys(names) datog objekta
//Object.values"()- vraca niz vrednosti iz datog objekta
//Object.enteries()- vraca niz nizova
//Object.is()-metoda koja ispituje identicku jednakost
//values metode za nizove i razlika
//array interation

// const vrednosti = Object.values(person);
// const keys = Object.keys(person);
// const enteries = Object.entries(person);
// const enteries2 = enteries.flat();

// console.log(vrednosti);
// console.log(keys);
// console.log(enteries);
// console.log(enteries2);
// console.log(Object.is(person, osoba));
//imaju razlicitu referencu iako su vrenosti iste

//referenca za non primitive


