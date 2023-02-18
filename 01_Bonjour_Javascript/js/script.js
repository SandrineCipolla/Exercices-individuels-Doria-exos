// let Nom = prompt("Indiquez votre nom");
// let Bonjour = "\ud83d\udc4b Bonjour " + Nom
// document.body.innerHTML += '<h2>' + Bonjour + '</h2>'

// let Annee_naissance = prompt("Indiquez votre annee de naissance");
// let Year = new Date().getFullYear();
// let Age = "Vous avez " + (Year - parseInt(Annee_naissance))+ " ans."
// document.body.innerHTML += '<h3>' + Age + '</h3>'

function askName() {
  let Nom = prompt("Indiquez votre nom");
  let Bonjour = "\ud83d\udc4b Bonjour " + Nom;
  document.body.innerHTML += "<h2>" + Bonjour + "</h2>";
}

function askBirthYear() {
  let Annee_naissance = prompt("Indiquez votre annee de naissance");
  let Mois_naissance = prompt("Indiquez votre mois de naissance");
  let Year = new Date().getFullYear();
  let Age = "Vous avez " + (Year - parseInt(Annee_naissance)) + " ans.";
  document.body.innerHTML += "<h3>" + Age + "</h3>";
}

// const monthNameToIndex = [
//   { monthName: "January", index: 1 },
//   { monthName: "May", index: 5 },
// ];

function askBirthDate2() {
  let Annee_naissance = prompt("Indiquez votre annee de naissance");
  let Mois_naissance = prompt("Indiquez votre mois de naissance");

  let birthMonthCount =
    parseInt(Annee_naissance) * 12 + parseInt(Mois_naissance);

  let currentDay = new Date();
  let currentDayMonthCount =
    currentDay.getFullYear() * 12 + currentDay.getMonth();

  let diffMonthCount = currentDayMonthCount - birthMonthCount;

  let year = Math.trunc(diffMonthCount / 12);

  let month = diffMonthCount % 12;

  console.log("year diff", year, "month count", month);

  document.body.innerHTML +=
    "<h3>Vous avez " + year + " ans et " + month + " mois.</h3>";
}

askName();
askBirthDate2();
// askBirthYear();
