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
    for(let j = text.length; j > i; j--) {
       const textToValidate = text.substring(i, j);
       if (isPalindrome(textToValidate) && longestPalindrome.length < textToValidate.length) {
         longestPalindrome = textToValidate;
       }
    }
  }
  return longestPalindrome.length > 1 ? longestPalindrome : '';
}

module.exports = {
  getLongestPalindrome
};