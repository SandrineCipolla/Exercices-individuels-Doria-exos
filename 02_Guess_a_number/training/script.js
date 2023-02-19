let trying = 0;
let rangeMin = 0;
let rangeMax = 50;
let playerOneNumber = guessNumberPlayerOne();

let tryingNumber = [];

function askNumber() {
  let givenNumber;
  givenNumber = parseInt(document.getElementById("numberToGuess").value);
  console.log("fonction askNumber", givenNumber);

  return givenNumber;
}
function DidIWin(givenNumber, playerOneNumber) {
  console.log(givenNumber, playerOneNumber);
  if (givenNumber > playerOneNumber) {
    return false;
  } else if (givenNumber < playerOneNumber) {
    return false;
  } else {
    return true;
  }
}

function guessNumberPlayerOne() {
  console.log("joueur 1 définir le nombre à deviner");
  let playerOneNumber;
  do {
    playerOneNumber = parseInt(
      prompt("Entrez un nombre compris entre 0 et 50")
    );
    if (
      playerOneNumber < rangeMin ||
      playerOneNumber > rangeMax ||
      isNaN(playerOneNumber)
    ) {
      alert(playerOneNumber + " n'est pas un nombre entre 0 et 50");
    }
    console.log(playerOneNumber);
  } while (
    playerOneNumber < rangeMin ||
    playerOneNumber > rangeMax ||
    isNaN(playerOneNumber)
  );
  return playerOneNumber;
}

function tryOnce() {
  let currentUserNumber = askNumber();
  trying++;
  console.log("Essai numéro ", trying);

  tryingNumber.push(currentUserNumber);
  let guessedNumber = "";

  for (let index = 0; index < tryingNumber.length; index++) {
    const element = tryingNumber[index];
    console.log("tableau", element);
    guessedNumber += element + ", ";
  }
  console.log("Concatenated guessed number are ", guessedNumber);

  let message2 = document.getElementById("message2");
  message2.innerText = "Nombres essayés: " + guessedNumber;

  let message1 = document.getElementById("message1");
  message1.innerText = "Essai numéro : " + trying;
  if (DidIWin(currentUserNumber, playerOneNumber)) {
    document.write("Bravo ! Vous avez deviné le nombre");
  } else {
    if (currentUserNumber > rangeMin && currentUserNumber < playerOneNumber) {
      rangeMin = currentUserNumber;
    }
    if (currentUserNumber < rangeMax && currentUserNumber > playerOneNumber) {
      rangeMax = currentUserNumber;
    }
    console.log("affichage rangeMin" + rangeMin);
    console.log("affichage rangeMax" + rangeMax);
    let rangeMinHtml = document.getElementById("rangeMin");
    rangeMinHtml.innerText = rangeMin;
    let rangeMaxHtml = document.getElementById("rangeMax");
    rangeMaxHtml.innerText = rangeMax;
  }
}
