function getLatinCharacterList(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    document.getElementById("arrays").innerText += "\n" + array[i];
    // document.getElementById("arrays").innerText += "\n";
  }
  document.getElementById("arrays").innerText += "\n------------------\n";
}
getLatinCharacterList("Hello,world");
