function capitalize(str) {
  const firstLetter = str.charAt(0);
  const restOfWord = str.slice(1);
  return firstLetter.toUpperCase() + restOfWord;
}

function reverseString(str) {
  const strAsArray = [...str];
  const newWord = [];
  for (let i = strAsArray.length; i--; i >= 0) {
    newWord.push(strAsArray[i]);
  }
  return newWord.join("");
}

export { capitalize, reverseString };
