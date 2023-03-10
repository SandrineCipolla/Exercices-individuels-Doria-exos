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
    if (isPlayerOneNumberInvalid(playerOneNumber)) {
      alert(playerOneNumber + " n'est pas un nombre entre 0 et 50");
    }
    console.log(playerOneNumber);
  } while (isPlayerOneNumberInvalid(playerOneNumber));
  return playerOneNumber;
}

function isPlayerOneNumberInvalid(playerOneNumber) {
  return (
    playerOneNumber < rangeMin ||
    playerOneNumber > rangeMax ||
    isNaN(playerOneNumber)
  );
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

  const HTML_ID_MESSAGE2 = "message2";
  const HTML_ID_MESSAGE1 = "message1";
  const HTML_ID_RANGEMIN = "rangeMin";
  const HTML_ID_RANGEMAX = "rangeMax";

  afficheDansHtml(HTML_ID_MESSAGE2, "Nombres essayés: " + guessedNumber);

  afficheDansHtml(HTML_ID_MESSAGE1, "Essai numéro : " + trying);

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

    afficheDansHtml(HTML_ID_RANGEMIN, rangeMin);

    afficheDansHtml(HTML_ID_RANGEMAX, rangeMax);
  }
}
/**
 * affiche du texte dans un élément html
 * @param {*} idHtmlElement
 * @param {*} textContent
 */
function afficheDansHtml(idHtmlElement, textContent) {
  let htmlElement = document.getElementById(idHtmlElement);
  htmlElement.innerText = textContent;
}
