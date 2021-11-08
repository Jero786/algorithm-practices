/**
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (!s || !t || s.length !== t.length) return false;
  
  const dictionary = createDictionary(t);
  
  return isAnagramFromDictionary(dictionary, s);
}

function createDictionary(word) {
  const dictionary = {};
  
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letter in dictionary) {
      dictionary[letter]++;
    } else {
      dictionary[letter] = 1;
    }
  }
  
  return dictionary;
}

function isAnagramFromDictionary(dictionary, text) {
  
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    if (letter in dictionary && dictionary[letter] > 0) {
      dictionary[letter]--;
    } else {
      return false;
    }
  }
  
  return true;
}

module.exports = {
  isAnagram
}