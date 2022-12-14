person = {
  firstName: "Munevera",
  lastName: "Plojovic",
};

person.fullName = function () {
  return this.firstName + "" + this.lastName;
};
console.log(person);

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const munevera = new User("Amina ", "Besirovic");

console.log(munevera);

User.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(munevera.fullName());

//2.opcija je preko funkcije na sledeci nacin:
//unutar objekta userFunction stavljamo sve metode koje zelimo dodati
//u objekte napravljene na sledeci nacin:

const userFunction = {
  fullName: function () {
    return this.firstName + "" + this.lastName;
  },
};
//izgebavanje new keyword-a
function createUser(firstName, lastName) {
  const newUser = Object.create(userFunction);
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  return newUser
}

const ahmed = createUser("Ahmed", "Krkmisevic")
console.log(ahmed);



