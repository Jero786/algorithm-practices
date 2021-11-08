/**
 * You are given a string s and an integer k. You can choose any character of
 * the string and change it to any other uppercase English character.
 * You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter you can
 * get after performing the above operations.
 *
 * Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * @param text
 * @param maxAllowedChanges
 * @returns {number}
 */
function getLongestRepeatedCharacter(text, maxAllowedChanges) {
  let left = 0;
  let right = 0;
  const lettersCount = {};
  let windowSize = 1;
  
  while (right < text.length) {
    const letter = text[right];
    
    if (letter in lettersCount) {
      lettersCount[letter]++;
    } else {
      lettersCount[letter] = 1;
    }
    
    windowSize = right - left + 1;
    const maxLength = getMaxFrequencyLetter(lettersCount);
    if ((windowSize - maxLength) <= maxAllowedChanges) {
      right++;
    } else {
      lettersCount[text[left]]--;
      left++;
    }
  }
  
  return windowSize;
}

function getMaxFrequencyLetter(lettersCount) {
  let max = Number.MIN_VALUE;
  for (const letter in lettersCount) {
    if (lettersCount[letter] > max) {
      max = lettersCount[letter];
    }
  }
  return max;
}


module.exports = {
  getLongestRepeatedCharacter
}