//node je  run time za js
//vrsi egzekuciju i kompajlovanje js koda
//http protokoli,
//node ima mnostvo svojih modula, najpoznatiji su file sistem i http modul
//klase i metode

class Car {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  fullName() {
    return console.log(this.name + " " + this.type);
  }
}
const newCar = new Car("Audi", "Limo");

console.log(newCar);
newCar.fullName();

class User {
  constructor(name, lastName, age, id) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
  }
  fullName() {
    return console.log(this.name + " " + this.lastName);
  }
}

const newUser = new User("Munevera", "Plojovic");
newUser.fullName();
