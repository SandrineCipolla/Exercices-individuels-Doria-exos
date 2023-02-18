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
    return false;
  } else if (givenNumber < 22) {
    alert("Plus grand");
    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
}
function gamePlay() {
  let givenNumber;
  do {
    givenNumber = askNumber();
  } while (DidIWin(givenNumber) == false);
  //   console.log(result, "resultat didIWin");
}
// =======================================

gamePlay();
