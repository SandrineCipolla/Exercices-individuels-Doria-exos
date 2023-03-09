//etape 1

function getLatinCharacterList(text) {
  return text.split("");
}
console.log(getLatinCharacterList("Hello, world"));

//etape 2

function translateLatinCharacter(char) {
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
  return latinToMorse[char.toUppercase()];
}
console.log(translateLatinCharacter)("H");

//etape 3

function encode(text) {
  let texte = getLatinCharacterList(text);

  let i = 0;
  while (i < texte.length) {
    let latincharacter = texte[i];
    let morseString = translateLatinCharacter(latincharacter);

    if (morseString != undefined) {
      result.push(morseString);
    } else if (latincharacter == "") {
      result.push("/");
    }
    i++;
  }
  return result;
}
encode("hello, world");

// etape 4
function getMorseCharacterList() {}
