function groupAnagrams(anagrams) {
  const dictionary = buildDictionary(anagrams)
  
  return Object.values(dictionary);
}


function buildDictionary(anagrams) {
  const dictionary = {};
  for (const word of anagrams) {
    const sortedWord = word.split('').sort().join('');
    if (sortedWord in dictionary) {
      dictionary[sortedWord].push(word);
    } else {
      dictionary[sortedWord] = [word]
    }
  }
  return dictionary;
}

module.exports = {
  groupAnagrams
}