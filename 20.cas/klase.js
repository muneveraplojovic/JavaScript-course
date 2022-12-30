//node je  run time za js
//vrsi egzekuciju i kompajlovanje js koda
//http protokoli,
//node ima mnostvo svojih modula, najpoznatiji su file sistem i http modul
//klase i metode

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
console.log(newUser);

console.log("---------------------");

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
}

const addition = new AdditionalInfo(
  "Avnoja bb",
  "Novi Pazar",
  "Serbia",
  "0631782150"
);

console.log(addition);
