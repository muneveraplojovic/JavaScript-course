//Mape

//sadrzi key-value parove
//pamte originalni redosled elemenata
//Kreiranje mape:

const fruits = new Map([
  ["apples", 60],
  ["bananas", 150],
  ["strawberry", 350],
  ["mango", 440],
]);

console.log(fruits);

//Metode:

//set() - podesava vrednost za odredjeni kljuc u mapi
fruits.set("pear", 40);
console.log(fruits);

//get() - vraca vrednost za odredjeni kljuc
console.log(fruits.get("bananas"));
console.log(fruits.get("kiwi")); // undefined

//delete() - brise ceo element, slanjem njegovog kljuca
fruits.delete("pear");
console.log(fruits);

//has() - vraca boolean u zavisnosti od toga da li key postoji u mapi ili ne
console.log(fruits.has("mango"));

//forEach()

fruits.forEach((val, key) => {
  console.log(val, key);
});
//prvi arg je vrenost a drugi key

//enteries - vraca interator u obliku key-value
console.log(fruits.entries());
