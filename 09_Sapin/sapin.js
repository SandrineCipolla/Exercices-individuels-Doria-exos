const sommet = "+";
const debutLigne = "/";
const finLigne = "\\";

function sapin(hauteur) {
  let total = "";
  let ligne = "";
  //   const espaceSommetSapin = 0;

  // Fonction qui renvoie le nombre de caractères de la ligne du sapin
  function nbCaracteresLigne(hauteur) {
    return 2 * hauteur + 3;
  }
  console.log("nbre caract dernière ligne :" + nbCaracteresLigne(9));

  const nbCaracteresDerniereLigne = nbCaracteresLigne(hauteur);
  //   const milieuDerniereLigne = nbCaracteresDerniereLigne / 2;

  for (let etage = 0; etage <= hauteur; etage++) {
    ligne = "";
    for (let espace = 1; espace <= hauteur - etage; espace++) {
      ligne += " ";
    }
    ligne += debutLigne;
    for (let etoile = 1; etoile <= 2 * etage + 1; etoile++) {
      if (etage === 0 && etoile === (2 * etage + 1) / 2) {
        ligne += sommet;
      } else {
        ligne += "*";
      }
    }

    ligne += finLigne + "\n";
    total += ligne;

    // if (etage === 0) {
    //   const milieu = Math.floor((2 * etage + 1) / 2);
    //   const positionSommet = espaceSommetSapin + milieu;
    //   const ligneSommet = " ".repeat(positionSommet - 1) + sommet + "\n";
    //   total = ligneSommet + total;
    if (etage === hauteur) {
      //   const milieuEtoiles = (2 * etage + 1) / 2;
      //   const positionSommet = espaceSommetSapin + milieuEtoiles;
      const milieuEtoiles = Math.floor(nbCaracteresDerniereLigne / 2);
      console.log("milieu étoiles :" + milieuEtoiles);
      const positionSommet = milieuEtoiles;
      const ligneSommet = " ".repeat(positionSommet) + sommet + "\n";
      total = ligneSommet + total;
    }
  }

  return total;
}

console.log(sapin(9));

// function sapin(hauteur) {
//   let total = "";
//   let ligne = "";

//   for (let etage = 0; etage <= hauteur; etage++) {
//     ligne = "";
//     let nbEspaces = hauteur - etage;
//     for (let espace = 1; espace <= nbEspaces; espace++) {
//       ligne += " ";
//     }
//     if (etage === hauteur) {
//       let nbEtoiles = etage * 2 + 1;
//       let nbEspaces = (nbEtoiles - sommet.length) / 2;
//       ligne += " ".repeat(nbEspaces) + sommet + "\n";
//     } else {
//       ligne += debutLigne;
//       let nbEtoiles = etage * 2 + 1;
//       let nbEspacesAvant = (nbEtoiles - 1) / 2;
//       let nbEspacesApres = (nbEtoiles - 1) / 2;
//       if (etage === 0) {
//         nbEspacesAvant = nbEspacesApres = 0;
//       }
//       for (let i = 1; i <= nbEspacesAvant; i++) {
//         ligne += " ";
//       }
//       for (let i = 1; i <= nbEtoiles; i++) {
//         if (i === nbEspacesAvant + 1) {
//           ligne += "=";
//         } else {
//           ligne += "*";
//         }
//       }
//       for (let i = 1; i <= nbEspacesApres; i++) {
//         ligne += " ";
//       }
//       ligne += finLigne + "\n";
//     }
//     total += ligne;
//   }
//   return total;
// }

// console.log(sapin(6));

//--------------------------------------------------------------------------
// const sommet = "+";
// const debutLigne = "/";
// const finLigne = "\\";

// function sapin(hauteur) {
//   let total = "";
//   let ligne = "";
//   const espaceSommetSapin = hauteur;

//   // Fonction qui renvoie le nombre de caractères de la ligne du sapin
//   function nbCaracteresLigne(etage) {
//     return 2 * etage + 3;
//   }

//   for (let etage = 0; etage <= hauteur; etage++) {
//     ligne = "";
//     for (let espace = 1; espace <= hauteur - etage; espace++) {
//       ligne += " ";
//     }
//     ligne += debutLigne;
//     for (let etoile = 1; etoile <= nbCaracteresLigne(etage) - 2; etoile++) {
//       if (
//         etage === 0 &&
//         etoile === Math.floor((nbCaracteresLigne(etage) - 1) / 2)
//       ) {
//         ligne += sommet;
//       } else {
//         ligne += "*";
//       }
//     }

//     ligne += finLigne + "\n";
//     total += ligne;

//     if (etage === hauteur) {
//       const positionSommet =
//         espaceSommetSapin + (nbCaracteresLigne(etage) - 1) / 2;
//       const ligneSommet = " ".repeat(positionSommet) + sommet + "\n";
//       total = ligneSommet + total;
//     }
//   }

//   // Affichage du nombre d'espaces de la première ligne
//   const nbEspacesPremiereLigne = nbCaracteresLigne(0) - 3;
//   console.log(
//     `Nombre d'espaces de la première ligne : ${nbEspacesPremiereLigne}`
//   );

//   // Affichage du nombre d'espaces de la dernière ligne
//   const nbEspacesDerniereLigne =
//     espaceSommetSapin + nbCaracteresLigne(hauteur) - espaceSommetSapin - 1;
//   console.log(
//     `Nombre d'espaces de la dernière ligne : ${nbEspacesDerniereLigne}`
//   );

//   return total;
// }

// console.log(sapin(6));
