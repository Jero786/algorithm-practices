function getConcatenatedWords(words) {
  //  O(n)
  const dictionary = words.reduce((dictionary, word) => {
    dictionary[word] = true;
    return dictionary;
  }, {});
  let result = [];
  
  // O(n = words * m = length word)
  for (const word of words) {
    result = createWordDictionary(dictionary, word, result);
  }
  
  return result;
}

function createWordDictionary(dictionary, word, result) {
  for (let i = 1; i < word.length - 1; i++) {
    const suffix = word.substring(0, i);
    const postfix = word.substring(i, word.length);
    if (dictionary[suffix] && dictionary[postfix]) {
      result.push(word)
    }
  }
  return result;
}


module.exports = {
  getConcatenatedWords
}