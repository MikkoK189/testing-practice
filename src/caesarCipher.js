const alphabetArray = [..."abcdefghijklmnopqrstuvwxyz"];

function cipher(str) {
  const originalAsArray = [...str];
  const cipheredWord = [];
  for (let i = 0; i < originalAsArray.length; i++) {
    if (alphabetArray.includes(originalAsArray[i].toLowerCase())) {
      let arrayIndex =
        alphabetArray.indexOf(originalAsArray[i].toLowerCase()) + 1;

      if (arrayIndex > alphabetArray.length - 1) {
        arrayIndex = 0;
      }
      let letter = alphabetArray[arrayIndex];
      if (checkForUpperCase(originalAsArray[i])) {
        letter = letter.toUpperCase();
      }
      cipheredWord.push(letter);
    } else {
      cipheredWord.push(originalAsArray[i]);
    }
  }
  return cipheredWord.join("");
}

function checkForUpperCase(letter) {
  if (letter == letter.toUpperCase()) {
    return true;
  }
  return false;
}

export { cipher };
