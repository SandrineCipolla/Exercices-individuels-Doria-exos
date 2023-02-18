function askNumber() {
  let givenNumber;
  do {
    givenNumber = parseInt(prompt("Entrer un nombre"));
    console.log("fonction askNumber", givenNumber);
  } while (isNaN(givenNumber));
}
askNumber();
