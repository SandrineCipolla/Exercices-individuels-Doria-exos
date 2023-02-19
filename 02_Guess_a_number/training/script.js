function askNumber() {
  let givenNumber;
  //   do {
  givenNumber = parseInt(document.getElementById("numberToGuess").value);
  console.log("fonction askNumber", givenNumber);
  //   } while (isNaN(givenNumber));

  return givenNumber;
}
function DidIWin(givenNumber, playerOneNumber) {
  console.log(givenNumber, playerOneNumber);
  if (givenNumber > playerOneNumber) {
    // alert("Plus petit");
    return false;
  } else if (givenNumber < playerOneNumber) {
    // alert("Plus grand");
    return false;
  } else {
    // alert("Bravo ! Vous avez deviné le nombre");
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
    if (playerOneNumber < 0 || playerOneNumber > 50 || isNaN(playerOneNumber)) {
      alert(playerOneNumber + " n'est pas un nombre entre 0 et 50");
    }
    console.log(playerOneNumber);
  } while (
    playerOneNumber < 0 ||
    playerOneNumber > 50 ||
    isNaN(playerOneNumber)
  );
  return playerOneNumber;
}

let playerOneNumber = guessNumberPlayerOne();

let trying = 0;

// function gamePlay() {
//   let givenNumber;
//   playerOneNumber = guessNumberPlayerOne();
//   console.log("player one number is ", playerOneNumber);
//   do {
//     givenNumber = askNumber();
//   } while (DidIWin(givenNumber, playerOneNumber) == false);
// }

function tryOnce() {
  let currentUserNumber = askNumber();
  trying++;

  console.log("Essai numéro ", trying);
  if (DidIWin(currentUserNumber, playerOneNumber)) {
    document.write("Bravo ! Vous avez deviné le nombre");
  }
}

// =======================================

//gamePlay();
