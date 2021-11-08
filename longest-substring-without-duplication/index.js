function getLongestSubstringWithoutRepeating(text) {
  let letterDictionary = {};
  let longestNonRepeatedText = '';
  let nonRepeatedText = '';
  
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    
    if (letter in letterDictionary) {
      longestNonRepeatedText = nonRepeatedText.length > longestNonRepeatedText.length
      ? nonRepeatedText
      : longestNonRepeatedText;
      nonRepeatedText = '';
      // let's back a position where it was repeated that letter,
      // and let `for` increment + 1 that position to star over from there.
      i = letterDictionary[letter];
      letterDictionary = {}
    } else {
      letterDictionary[letter] = i;
      nonRepeatedText += letter;
    }
  }
  
  return nonRepeatedText.length >= longestNonRepeatedText.length
    ? nonRepeatedText
    : longestNonRepeatedText;
}

module.exports = {
  getLongestSubstringWithoutRepeating
}