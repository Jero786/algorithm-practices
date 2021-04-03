/**
 * Indicate if given word is contained by given Magazine or not.
 * @param magazine
 * @param word
 * @returns {boolean}
 */
function canSpell(magazine, word) {
  // O(N) + O(N)
  const dictionaryCount = magazine.reduce((map, aWord, ) => {
    if (!map[aWord]) {
      map[aWord] = 1
    } else {
      map[aWord]++;
    }
    return map;
  }, {})
  
  // O(N) + O(N)
  return word.split('').every(aWord => {
    if(dictionaryCount[aWord] > 0) {
      dictionaryCount[aWord]--;
      return true;
    } else {
      return false
    }
  })
}

module.exports = {
  canSpell
};