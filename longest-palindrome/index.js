/**
 * Validate if given text is Palindrome or not.
 * @param text
 * @returns {boolean}
 */
function isPalindrome(text = '') {
  const invertedText = text.split('').reverse().join('');
  return text === invertedText;
}

/**
 * Given text return the longest palindrome.
 * @param text
 * @returns {string}
 */
function getLongestPalindrome(text = '') {
  let longestPalindrome = '';
  for (let i = 0; i < (text.length - 1); i++) {
    for (let j = text.length; j > i; j--) {
      const textToValidate = text.substring(i, j);
      if (isPalindrome(textToValidate) && longestPalindrome.length < textToValidate.length) {
        longestPalindrome = textToValidate;
      }
    }
  }
  return longestPalindrome.length > 1 ? longestPalindrome : '';
}

/**
 * Validate if given text is Palindrome or not.
 * @param text
 * @returns {boolean}
 */
function isPalindromeManual(text = '', indexLow = -1, indexHigh = -1) {
  if (indexLow > indexHigh) {
    return true;
  }
  
  if (indexLow === -1) {
    return isPalindrome(text, 0, text.length - 1);
  }
  
  if (text[indexLow] !== text[indexHigh]) {
    return false;
  } else {
    indexLow++;
    indexHigh--;
    return isPalindrome(text, indexLow, indexHigh);
  }
}

/**
 * Given text return the longest palindrome.
 * @param text
 * @returns {string}
 */
function getLongestPalindromeRecursiveWay(text = '', indexLeft = -1, indexRight = -1, longestPalindrome = '') {
  
  if (indexLeft === -1) {
    // initialization
    return getLongestPalindromeRecursiveWay(text, 0, text.length, '');
  }
  
  // exit condition
  if (indexLeft === text.length) return longestPalindrome.length > 1
    ? longestPalindrome
    : '';
  
  // algorithm
  const newPalindrome = text.substring(indexLeft, indexRight);
  if (isPalindrome(newPalindrome) && longestPalindrome.length < newPalindrome.length) {
    longestPalindrome = newPalindrome;
  }
  
  // update index for the next iteration
  if (indexLeft < indexRight) {
    indexRight--;
  } else {
    indexRight = text.length;
    indexLeft++;
  }
  
  return getLongestPalindromeRecursiveWay(text, indexLeft, indexRight, longestPalindrome);
}


module.exports = {
  isPalindromeManual,
  getLongestPalindrome,
  getLongestPalindromeRecursiveWay
};