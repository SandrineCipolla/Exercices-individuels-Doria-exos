function askNumber() {
  let givenNumber;
  console.log("fonction asknumber");
  do {
    givenNumber = parseInt(prompt("Entrez un nombre"));
  } while (isNaN(givenNumber));
  return givenNumber;
}
//askNumber();

function didIWin(givenNumber) {
  console.log("fonction didwin");

  //   while (givenNumber !== 22) {
  console.log("tant que");
  // givenNumber = parseInt(prompt("Entrez un nombre"));

  if (givenNumber < 22) {
    alert("Plus grand");
    console.log("plus grand");

    return false;
  } else if (givenNumber > 22) {
    alert("Plus petit");
    console.log("plus petit");

    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    console.log("gagné");

    return true;
  }
  //   }
}

// didIWin();

function gamePlay() {
  console.log("toutenun");
  let isWin = false;
  do {
    let givenNumber = askNumber();
    isWin = didIWin(givenNumber);
  } while (isWin == false);
}

gamePlay();
