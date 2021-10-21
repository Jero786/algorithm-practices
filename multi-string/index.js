function multiStringSearch(bigString = '', smallStrings = []) {
  
  const smallStringDictionary = smallStrings.reduce((dictionary, smallString) => {
    if (contains(bigString, smallString)) {
      dictionary[smallString] = true;
    }
    return dictionary;
  }, {});
  
  return smallStrings.map(word => {
    return !!smallStringDictionary[word]
  })
}

function contains(text = '', target = '') {
  
  if (!text || !target) return false;
  
  let indexFound = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === target[indexFound]) {
      indexFound++;
      if (indexFound === target.length) break;
    } else {
      i -= indexFound; // if you already found character, try again where you left index.
      indexFound = 0; // reset if I found something
    }
  }
  
  return indexFound >= target.length;
}

module.exports = {
  multiStringSearch
}