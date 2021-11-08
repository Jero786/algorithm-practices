function generateDocument(characters, document) {
  
  if (!characters) return false;
  
  if (!document) return true;
  
  // load dictionary with characters availables
  const dictionary = buildDictionaryCharacters(characters);
  
  // transverse the doc using the dictionary
  const letters = document.split('');
  
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letter in dictionary && dictionary[letter] > 0) {
      dictionary[letter]--;
    } else {
      return false;
    }
  }
  
  return true;
}


function buildDictionaryCharacters(characters = '') {
  return characters.split('').reduce((dictionary, letter) => {
    if (letter in dictionary) {
      dictionary[letter]++;
    } else {
      dictionary[letter] = 1;
    }
    return dictionary;
  }, {});
}


module.exports = {
  generateDocument
}