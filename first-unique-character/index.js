/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @param text
 * @returns {number}
 */
const getFirstUniqueCharacter = (text) => {
  
  const mapCounter = getMapCounterWords(text);
  
  let minIndex = Number.MAX_VALUE;
  
  for (const letter of Object.keys(mapCounter)) {
    const indexValue = mapCounter[letter];
    if (indexValue > -1 && indexValue < minIndex) {
      minIndex = indexValue;
    }
  }
  
  return minIndex === Number.MAX_VALUE ? -1 : minIndex;
};

function getMapCounterWords(text) {
  const map = {};
  for (let letterIndex = 0; letterIndex < text.length; letterIndex++) {
    const letter = text[letterIndex];
    if (!map[letter]) {
      map[letter] = letterIndex;
    } else {
      map[letter] = -1;
    }
  }
  return map;
}

module.exports = {
  getFirstUniqueCharacter
};