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
  }
}

// =======================================

let givenNumber = askNumber();

DidIWin(givenNumber);
