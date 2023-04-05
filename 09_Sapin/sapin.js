const sommet = "+";
const debutLigne = "/";
const finLigne = "\\";

function sapin(hauteur) {
  let total = "    " + sommet + "\n";
  let ligne = "";

  for (let etage = 0; etage <= hauteur; etage++) {
    ligne = "";
    for (let espace = 1; espace <= hauteur - etage; espace++) {
      ligne += " ";
    }
    ligne += debutLigne;
    for (let etoile = 1; etoile <= 2 * etage + 1; etoile++) {
      ligne += "*";
    }
    ligne += finLigne + "\n";
    total += ligne;
  }
  return total;
}
console.log(sapin(3));
