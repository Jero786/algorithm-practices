/**
 * Given two strings s and t of lengths m and n respectively,
 * return the minimum window substring of s such that every
 * character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * A substring is a contiguous sequence of characters within the string.
 *
 *
 * link: https://leetcode.com/problems/minimum-window-substring/
 * @param largeText
 * @param smallText
 * @returns {string}
 */
function getMinimumWindowSubstring(largeText, smallText) {
  
  let left = 0;
  let right = 0;
  let lettersNeed = getLettersNeed(smallText);
  let amountLettersHave = 0;
  let lettersHave = {};
  let smallerSubstring = '';
  let substring = '';
  const amountLetterNeed = Object.values(lettersNeed).reduce((total, amount) => total + amount, 0);
  
  while (left <= right) {
    const letter = largeText[right];
    substring += letter;
    if (letter in lettersNeed) {
      lettersHave = incrementMap(lettersHave, letter);
      if (lettersNeed[letter] === lettersHave[letter]) {
        amountLettersHave++;
      } else {
        amountLettersHave = getAmountLetterHave(lettersNeed, substring);
      }
    }
    if (amountLettersHave === amountLetterNeed) {
      if (!smallerSubstring) {
        smallerSubstring = substring;
      } else {
        if (hasLetterRequired(substring, lettersHave)) {
          smallerSubstring = substring.length < smallerSubstring.length
            ? substring
            : smallerSubstring;
        }
      }
      left++;
      substring = largeText.substring(left, right);
    } else {
      if (right < largeText.length) {
        right++;
      } else {
        left++;
      }
    }
  }
  
  return smallerSubstring;
}

function hasLetterRequired(text, letterHave) {
  const textDictionary = text.split('').reduce((total, letter) => incrementMap(total, letter), {})
  return Object.keys(letterHave).every(key => letterHave[key] >= textDictionary[key]);
}

function incrementMap(dictionary, key) {
  if (key in dictionary) {
    dictionary[key]++;
  } else {
    dictionary[key] = 1;
  }
  return dictionary;
}

function getAmountLetterHave(letterNeed, text) {
  const letterHave = text.split('').reduce((dictionary, letter) => incrementMap(dictionary, letter), {});
  const result = Object.keys(letterNeed).reduce((dictionary, letter) => {
    dictionary[letter] = letterHave[letter] - letterNeed[letter];
    return dictionary;
  }, {});
  
  return Object.values(result).reduce((totalAmount, amount) => {
    if (amount >= 0) {
      totalAmount++;
    }
    return totalAmount;
  }, 0);
}

function getLettersNeed(smallText) {
  return smallText.split('').reduce((dictionary, letter) => incrementMap(dictionary, letter), {});
}

module.exports = {
  getMinimumWindowSubstring
}