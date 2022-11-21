//

// destructuring assignment mdn

// object metode frezze
//imamo app1, 1app2, app3

const godine = [
  { starost: 19 },
  { starost: 19 },
  { starost: 19 },
  { starost: 14 },
  { starost: 19 },
  { starost: 17 },
  { starost: 16 },
  { starost: 18 },
];
//punoletne izdvojiti
//filer-pravimo novi niz
//array metode call apply bind map filter reduce

const newArr = godine.filter((el) => el.starost > 17);

console.log(newArr);

//Napravi niz objekata gde ce svaki objekat sadrzat:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC(bool).
//func pravi novi niz koji ce sadrzati one el cija boja ociju je braon i koji nisu polozili c
