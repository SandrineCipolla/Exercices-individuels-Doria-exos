// function askNumber() {
//   let givenNumber;
//   console.log("fonction asknumber");
//   do {
//     givenNumber = parseInt(prompt("Entrez un nombre"));
//   } while (isNaN(givenNumber));
//   return givenNumber;
// }

// function didIWin(givenNumber) {
//   console.log("fonction didwin");

//   console.log("tant que");

//   if (givenNumber < 22) {
//     alert("Plus grand");
//     console.log("plus grand");

//     return false;
//   } else if (givenNumber > 22) {
//     alert("Plus petit");
//     console.log("plus petit");

//     return false;
//   } else {
//     alert("Bravo ! Vous avez deviné le nombre");
//     console.log("gagné");

//     return true;
//   }
// }

// function gamePlay() {
//   console.log("toutenun");
//   let isWin = false;
//   do {
//     let givenNumber = askNumber();
//     isWin = didIWin(givenNumber);
//   } while (isWin == false);
// }
// gamePlay();

function guessNumberPlayerOne() {
  console.log("devinez un nombre");
  let playerOneNumber;
  do {
    playerOneNumber = parseInt(
      prompt("Entrez un nombre compris entre 0 et 50")
    );
  } while (
    playerOneNumber < 0 ||
    playerOneNumber > 50 ||
    isNaN(playerOneNumber)
  );
  console.log(playerOneNumber);
  return playerOneNumber;
}
guessNumberPlayerOne();
