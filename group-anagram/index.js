function groupAnagrams(anagrams) {
  if (!anagrams || anagrams.length === 0) return [];

  const dictionary = {};

  for (const word of anagrams) {
    // abc <-- bac
    const sortedWord = word.split('').sort().join('');
    if (sortedWord in dictionary) {
      dictionary[sortedWord].push(word);
    } else {
      dictionary[sortedWord] = [word];
    }
  }

  return Object.values(dictionary);
}

module.exports = {
  groupAnagrams
};
