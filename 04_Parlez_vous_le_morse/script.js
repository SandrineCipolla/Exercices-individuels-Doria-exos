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
  let phrase = "Hello,world";
  let chars = phrase.split("");

  console.log(chars);
  document.write(chars);
  return chars;
}
getLatinCharacterList();

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
