// function getLatinCharacterList(array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     document.getElementById("arrays").innerText += "\n" + array[i];
//     // document.getElementById("arrays").innerText += "\n";
//   }
//   document.getElementById("arrays").innerText += "\n------------------\n";
// }
// getLatinCharacterList("Hello,world");

// let phrase = "Hello,world";
// let splits = phrase.split(/(\d)/);
// console.log(splits);

// function getLatinCharacterList(texte) {
//   //   let phrase = "Hello,world";
//   for (var i = 0; i < texte.length; i++) {
//     console.log(texte[i]);
//     document.getElementById("arrays").innerText += "\n" + texte[i];
//   }
// }
// getLatinCharacterList("Hello,world");

// const chars = str.split('');
// console.log(chars[8]);

function getLatinCharacterList() {
  let phrase = "Hello, world";
  let chars = phrase.split("");

  console.log(chars);
  //   document.write(chars);
  document.getElementById("Etape1").innerText += "\n" + chars;
  return chars;
}
getLatinCharacterList();

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
  document.getElementById("Etape2").innerText += "\n" + latinToMorse[a];
  return latinToMorse[a];
}
console.log(translateLatinCharacter("A"));

// // function translateLatinCharacter() {
// const latinToMorse = new Map([
//   ["A", ".-"],
//   ["B", "-..."],
//   ["C", "-.-."],
//   ["D", "-.."],
//   ["E", "."],
//   ["F", "..-."],
//   ["G", "--."],
//   ["H", "...."],
//   ["I", ".."],
//   ["J", ".---"],
//   ["K", "-.-"],
//   ["L", ".-.."],
//   ["M", "--"],
//   ["N", "-."],
//   ["O", "---"],
//   ["P", ".--."],
//   ["Q", "--.-"],
//   ["R", ".-."],
//   ["S", "..."],
//   ["T", "-"],
//   ["U", "..-"],
//   ["V", "...-"],
//   ["W", ".--"],
//   ["X", "-..-"],
//   ["Y", "-.--"],
//   ["Z", "--.."],
// ]);
// console.log(latinToMorse.get("A"));
// for (const [clé, valeur] of latinToMorse) {
//   console.log(clé + "=" + valeur);
// }

// document.getElementById("Etape2").innerText +=
//   "\n" + caract + "=" + latinToMorse2[caract];
// return caract + "=" + latinToMorse2[caract];

// }
// translateLatinCharacter();

// var dict = { a: 1, b: 2, c: 3 };
// var keys = Object.keys(dict);
// var i;
// var key;
// for (i = 0; i < keys.length; i++) {
//   key = keys[0];
//   console.log(key + "=" + dict[key]);
// }

// const map = new Map([
//   ["A", "un"],
//   [2, "deux"],
//   [3, "trois"],
//   [4, "quatre"],
// ]);
// for (const [clé, valeur] of map) {
//   console.log(clé + " = " + valeur);}
