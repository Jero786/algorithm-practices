/**
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * https://leetcode.com/problems/valid-anagram/
 * TC: O(N)
 * EC: O(N)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(wordOne, wordTwo) {
  if (!wordOne || !wordTwo || wordOne.length !== wordTwo.length) return false;

  let dictionary = {};

  for (const letter of wordOne) {
    if (letter in dictionary) {
      dictionary[letter]++;
    } else {
      dictionary[letter] = 1;
    }
  }

  for (const letter of wordTwo) {
    if (letter in dictionary) {
      if (dictionary[letter] > 0) {
        dictionary[letter]--;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return Object.values(dictionary).every((value) => value === 0);
}

module.exports = {
  isAnagram
};
