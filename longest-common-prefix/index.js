function getLongestCommonPrefix(dictionary) {
  if (!dictionary) {
    throw new Error('Given dictionary is undefined');
  }
  
  let prefix = '';
  
  for (let i = 0; i < dictionary.length - 1; i++) {
    const word = dictionary[i];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      if (isSameLetter(letter, dictionary, j)) {
        prefix += letter;
      } else {
        return prefix;
      }
    }
  }
  return prefix;
}


function isSameLetter(letter, words = [], index) {
  return words.every((word => word[index] === letter));
}

module.exports = {
  getLongestCommonPrefix
};