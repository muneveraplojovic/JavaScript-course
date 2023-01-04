//node je  run time za js
//vrsi egzekuciju i kompajlovanje js koda
//http protokoli,
//node ima mnostvo svojih modula, najpoznatiji su file sistem i http modul
//klase i metode
//klase su izrada modela podatka unutar aplikacije( web ili bilo koje druge)
//svaka klasa mora imati metodu constructor(), a ona vrsi funkciju glave funkcije(metode) unutar klase
//pomocu constructor metode se inicijalizuju glavni podaci unutar klase
// //inicijalizacija promenljivih i dodela vrednosti njima vrsi se pomocu this.metode( this.name npr)
// metode su funkcije unutar klase koje se takodje mogu vrsiti inicijalizaciju promenljivih i obradu podataka
//svaka klasa MORAAA imati constructor metodu

// class Car {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   fullName() {
//     return console.log(this.name + " " + this.type);
//   }
// }
// const newCar = new Car("Audi", "Limo");

// console.log(newCar);
// newCar.fullName();

// class User {
//   constructor(name, lastName, age, id) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//     this.id = id;
//   }
//   fullName() {
//     return console.log(this.name + " " + this.lastName);
//   }
// }

// const newUser = new User("Munevera", "Plojovic");
// newUser.fullName();

//create new class User with data like name, last name, year of birth.

class User {
  constructor(name, lastName, dateOfBirth) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.age = this.getYears(dateOfBirth);
  }
  getYears() {
    return 2022 - this.dateOfBirth;
  }
}

const newUser = new User("Munevera", "Plojovic", "2003");
newUser.getYears();
//console.log(newUser.getYears());
// console.log(newUser);

// console.log("---------------------");

class AdditionalInfo extends User {
  stateArr = [
    { state: "USA", cId: "+1" },
    { state: "UK", cId: "+44" },
    { state: "Mexico", cId: "+52" },
    { state: "India", cId: "+91" },
    { state: "China", cId: "+86" },
    { state: "Serbia", cId: "+381" },
  ];

  constructor(adress, city, state, phoneNumber) {
    super(User.name, User.lastName, User.dateOfBirth, User.age);
    this.adress = adress;
    this.city = city;
    this.state = state;
    this.phoneNumber = phoneNumber;
    this.number = this.changeNum(this.state, this.phoneNumber);
  }

  changeNum(state, phoneNumber) {
    this.findState = this.stateArr.find((s) => s.state === state);
    return phoneNumber.replace(phoneNumber[0], this.findState.cId);
  }

  showObject() {
    this.look = {
      name: newUser.name,
      lastName: newUser.lastName,
      dateOfBirth: newUser.dateOfBirth,
      adress: this.adress,
      city: this.city,
      state: this.state,
      phoneNumber: this.phoneNumber,
      number: this.number,
    };
    console.log(this.look);
  }
}
const addition = new AdditionalInfo(
  "Avnoja bb",
  "Novi Pazar",
  "Serbia",
  "0631782150"
);

// console.log(addition.showObject());
// console.log("---------------");
addition.showObject();
