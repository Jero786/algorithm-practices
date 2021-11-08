function getPalindromeSubstring(text) {
  if (!text) return 0;
  if (text.length === 1) return 1;
  
  let countPalindrome = text.length;
  
  countPalindrome = countEvens(text, countPalindrome);
  countPalindrome = countOdds(text, countPalindrome);
  
  return countPalindrome;
}

function countEvens(text, countPalindrome) {
  return incrementCount(text, countPalindrome, (i) => [i, i + 1]);
}

function countOdds(text, countPalindrome) {
  return incrementCount(text, countPalindrome, (i) => [i - 1, i + 1]);
}

function incrementCount(text, countPalindrome, getIndex) {
  for (let i = 0; i < text.length - 1; i++) {
    let [leftIndex, rightIndex] = getIndex(i);
    while (leftIndex >= 0 && rightIndex < text.length) {
      if (text[leftIndex] === text[rightIndex]) {
        countPalindrome++;
      } else {
        break; // should breack because the current range is not a valid palindrome
      }
      leftIndex--;
      rightIndex++;
    }
  }
  return countPalindrome;
}

module.exports = {
  getPalindromeSubstring
}