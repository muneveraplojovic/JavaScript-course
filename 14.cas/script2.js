//setovi i

//setovi predstavljaju kolekciju unique values
//svaki se element se pojavljuje samo jednom

//Kreiranje setova:

const letters = new Set(["a", "b", "c", "d", "a"]);
//zadnje a se ne ispusuje jer ne prima duplikate, moze da se doda
console.log(letters);

//Metode za setove:
//add( ) - dodaje novi element u setu
letters.add("m");
console.log(letters);
//delete() - brise specifican element u sebi
letters.delete("m");
console.log(letters);
//has() - vraca boolean - da li se neka vrednost nalazi u setu
console.log(letters.has("m"));
//forEach() - poziva callback funkciju za svaki element
letters.forEach((el) => {
  console.log(el);
});
//values()
console.log(letters.values());
console.log("----------------------------------");
//Napraviti funckiju koja iz datog niza vraca novi niz brisuci duplikate originalnog

const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 1, 4];

function getNewArray(arg) {
  let newArray = new Set(arg);
  return [...newArray];
}
console.log(getNewArray(array));
