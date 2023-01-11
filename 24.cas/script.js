//inicijalizacija elemenata
var randomInput = document.getElementById("toDoAdd");
var buttonAdd = document.getElementById("addGoal");
var editGoalButton = document.getElementById("editGoal");
var goalsList = document.getElementById("goalsList");
var editElemButton, deleteElemButton;
var goals = []; //treba da sadrzi obj id i value

editGoalButton.style.display = "none";

buttonAdd.addEventListener("click", function () {
  var newInput = {
    id: idCreator(6), //duzina stringa
    value: randomInput.value, // input uzima tj value
  };

  goals.push(newInput); //dodavanje u array
  renderList(); //renderovanje liste
  randomInput.value = ""; //brisanje inputa nakon dodavanja
});

//funkcija za editovanje elemenata
function editElem(edit) {
  editGoalButton.style.display = "block";
  buttonAdd.style.display = "none";
  let elemId = edit.getAttribute("id");
  let toEdit = goals.find((g) => g.id === elemId);
  randomInput.value = toEdit.value;
  editGoalButton.setAttribute("class", elemId);
}

editGoalButton.addEventListener("click", function () {
  let elemId = editGoalButton.getAttribute("class");
  console.log(goals.findIndex((g) => g.id === elemId));
  let index = goals.findIndex((g) => g.id === elemId);
  goals[index].value = randomInput.value;
  renderList();
  randomInput.value = "";
}); //funkcija za editovanje elemenata 2

//funkcija za brisanje elemenata
function deleteElem(edit) {
  let elemId = edit.getAttribute("id");
  goals = goals.filter((g) => g.id !== elemId);
  renderList();
  randomInput.value = "";
}

//prikaz goals-a
function renderList() {
  goalsList.innerHTML = "";
  goals.forEach((g) => {
    goalsList.innerHTML += `<li>${g.value}<button id="${g.id}" class='editElem' onclick='editElem(this)'>Edit</button><button id="${g.id}" class='deleteElem' onclick='deleteElem(this)'>Delete</button></li>`;
  });
}
//this nam sluzi za prikazivanje datog stringa jer bez njega ne moze da se pozove funkcija

//random string generator - dobro za cuvanje podataka
function idCreator(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
