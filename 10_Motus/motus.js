// function tryWord(word, base) {
//   // TODO: fix jeu sensible à la casse.
//   if (word === base) {
//     return true;
//   } else {
//     let wellPlaced = [];
//     let notInWord = [];
//     let missplaced = [];

//     let arrayBase = base.split("");
//     let arrayWord = word.split("");

//     for (let i = 0; i < arrayBase.length - 1; i++) {
//       if (arrayBase[i] === arrayWord[i]) {
//         wellPlaced.push(arrayWord[i]);
//     if (arrayBase[i]!== arrayWord[i]){
//         missplaced.push(arrayWord[i]);
//     }
//       } else {
//         for (const char of arrayWord) {
//             if (arrayBase[i].includes(char) === false) {
//               notInWord.push(arrayWord[i]);
//             }
//           }
//       }
//         missplaced.push(arrayWord[i]);
      
//     }

    

//     return {
//       wellPlaced: wellPlaced,
//       missplaced: missplaced,
//       notInWord: notInWord,
//     };
//   }
// }

// function guess() {
//   let base = "dictionnaire";
//   let word = document.getElementById("word").value;
//   let result = tryWord(word, base);
//   document.getElementById("word").value = "";
//   document.getElementById("try").innerText = word;
//   document.getElementById("well").innerText =
//     "Bien placé: " + result.wellPlaced.join(", ");
//   document.getElementById("miss").innerText =
//     "Mal placé: " + result.missplaced.join(", ");
//   document.getElementById("not").innerText =
//     "Pas dans le mot: " + result.notInWord.join(", ");
//   if (result.wellPlaced.length === base.length) {
//     document.getElementById("win").innerText = "Vous avez gagné";
//   }
// }

function tryWord(word, base) {
  // TODO: fix jeu sensible à la casse => Convertir les deux mots en minuscules pour ignorer la casse
  word = word.toLowerCase();
  base = base.toLowerCase();

  if (word === base) {
    return true;
  } else {
    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];

    let arrayBase = base.split("");
    let arrayWord = word.split("");

    for (let i = 0; i < arrayBase.length; i++) {
      if (arrayBase[i] === arrayWord[i]) {
        wellPlaced.push(arrayWord[i]);
      } else if (arrayBase.includes(arrayWord[i])) {
        // Ajouter le caractère mal placé uniquement s'il est dans le mot de base
        missplaced.push(arrayWord[i]);
      } else {
        // Ajouter le caractère qui ne figure pas dans le mot de base
        notInWord.push(arrayWord[i]);
      }
    }

    // Retourner les trois tableaux dans un objet
    return {
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
    };
  }
}

function guess() {
  let base = "dictionnaire";
  let word = document.getElementById("word").value;
  let result = tryWord(word, base);
  document.getElementById("word").value = "";
  document.getElementById("try").innerText = word;
  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced.join(", ");
  document.getElementById("miss").innerText =
    "Mal placé: " + result.missplaced.join(", ");
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord.join(", ");
  if (result.wellPlaced.length === base.length) {
    document.getElementById("win").innerText = "Vous avez gagné";
  }
}
