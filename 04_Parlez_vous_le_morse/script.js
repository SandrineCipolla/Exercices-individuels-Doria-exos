function getLatinCharacterList(phrase) {
  // let phrase = "Hello, world";
  // let chars = phrase.split("");
  let chars = [...phrase];

  console.log(chars, "avec 3 '...'");
  return chars;
}
let step1 = getLatinCharacterList("Hello, world");
document.getElementById("Etape1").innerText += "\n" + step1;

function translateLatinCharacter(a) {
  const latinToMorse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
  };

  return latinToMorse[a];
}
let step2 = translateLatinCharacter("A");
document.getElementById("Etape2").innerText += "\n" + step2;

// function translateLatinCharacter(toto) {
//   const latinToMorse = new Map([
//     ["A", ".-"],
//     ["B", "-..."],
//     ["C", "-.-."],
//     ["D", "-.."],
//     ["E", "."],
//     ["F", "..-."],
//     ["G", "--."],
//     ["H", "...."],
//     ["I", ".."],
//     ["J", ".---"],
//     ["K", "-.-"],
//     ["L", ".-.."],
//     ["M", "--"],
//     ["N", "-."],
//     ["O", "---"],
//     ["P", ".--."],
//     ["Q", "--.-"],
//     ["R", ".-."],
//     ["S", "..."],
//     ["T", "-"],
//     ["U", "..-"],
//     ["V", "...-"],
//     ["W", ".--"],
//     ["X", "-..-"],
//     ["Y", "-.--"],
//     ["Z", "--.."],
//   ]);
//   return latinToMorse.get(toto);
// }
// console.log(translateLatinCharacter("Z"));

function encode(texte) {
  let textAsCharacters = getLatinCharacterList(texte);

  let result = [];

  for (var i = 0; i < textAsCharacters.length; i++) {
    let currentCharacter = textAsCharacters[i];

    console.log(currentCharacter);

    let morseEncodedCharacter = translateLatinCharacter(currentCharacter);

    result.push(morseEncodedCharacter);
  }
  return result;
}
let step3 = encode("BONJOUR");
document.getElementById("Etape3").innerText += "\n" + step3;

function getMorseCharacterList(signe) {
  let chars = signe.split(" ");
  return chars;
}
let step4 = getMorseCharacterList("-... --- -. .--- --- ..- .-.");
document.getElementById("Etape4").innerText += "\n" + step4;

function translateMorseCharacter(b) {
  const morseToLatin = {
    "-": "T",
    "--": "M",
    "---": "O",
    "--.": "G",
    "--.-": "Q",
    "--..": "Z",
    "-.": "N",
    "-.-": "K",
    "-.--": "Y",
    "-.-.": "C",
    "-..": "D",
    "-..-": "X",
    "-...": "B",
    ".": "E",
    ".-": "A",
    ".--": "W",
    ".---": "J",
    ".--.": "P",
    ".-.": "R",
    ".-..": "L",
    "..": "I",
    "..-": "U",
    "..-.": "F",
    "...": "S",
    "...-": "V",
    "....": "H",
  };

  return morseToLatin[b];
}
let step4bis = translateMorseCharacter(".--");
document.getElementById("Etape4bis").innerText += "\n" + step4bis;

function decode(morse) {
  let textAsMorse = getMorseCharacterList(morse);

  let result = [];
  for (var i = 0; i < textAsMorse.length; i++) {
    let currentMorse = textAsMorse[i];
    console.log(currentMorse);
    if (currentMorse == "/") {
      result.push(" ");
    } else {
      let morseDecodedCharacter = translateMorseCharacter(currentMorse);
      if (morseDecodedCharacter != null) {
        result.push(morseDecodedCharacter);
      }
    }
  }
  return result.join("");
}
let step4ter = decode("-... --- -. .--- --- ..- .-.");
document.getElementById("Etape4ter").innerText += "\n" + step4ter;
// ---------------------------------------------------------------------------------------
function getVillainName(birthdate) {
  const m = [
    "Evil",
    "Vile",
    "Cruel",
    "Trashy",
    "Despicable",
    "Embarrassing",
    "Disreputable",
    "Atrocious",
    "Twirling",
    "Orange",
    "Terrifying",
    "Awkward",
  ];
  const d = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];
  const birthday = new Date();
  const month = birthday.getMonth();
  const day = birthday.getDate();
  const firstName = m[month];
  const lastName = d[day % 10];
}

console.log(getVillainName("12-25"));
