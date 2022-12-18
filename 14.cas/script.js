function myFunc() {
  let broj = 4;
  let predmet = "stolice";
  return `U prostoru imamo ${broj} ${predmet}.`;
}

console.log(myFunc());
//local scope
//Poznata je cinjenica da kada se izvrsi funkcija, sve njene lokalne promenljive pokupi "garbage" kolektor i one prestaju dda postoje u memoriji.
//To nije slucaj ako postoji funkcija koja zahteva koriscenje promenljvih iz domena druge funkcije
//To se najcesce postize ugradjivanjem funkcije unutar druge funkcije

function myFunc() {
    let broj = 4;
    let predmet = "stolice";
    function secondFunc(arg) {
        console.log(arg + broj);
    }
    secondFunc(10);
    return `To je bio primer closure-a u js-u`;
}

console.log(myFunc());

//clousure je funkcija koja zahteva koriscenje promenljivih iz domena druge funkcije.


