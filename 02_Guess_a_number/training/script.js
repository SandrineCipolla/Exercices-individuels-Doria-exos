function askNumber() {
  let givenNumber;
  do {
    givenNumber = parseInt(prompt("Entrer un nombre"));
    console.log("fonction askNumber", givenNumber);
  } while (isNaN(givenNumber));
  return givenNumber;
}
function DidIWin(givenNumber) {
  if (givenNumber > 22) {
    alert("Plus petit");
  } else if (givenNumber < 22) {
    alert("Plus grand");
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
  }
}

// =======================================

let givenNumber = askNumber();

DidIWin(givenNumber);
