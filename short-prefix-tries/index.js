function shortPrefix(dictionary) {
  return Array.from(new Set(dictionary.map((text, _, array) => {
    let result = text[0];
    for (let indexChar = 1; indexChar < text.length; indexChar++) {
      const currentChar = text[indexChar];
      const allSamePrefix = array
      .filter(targetText => targetText !== text) // removing current text
      .map(targetText => targetText[indexChar])
      .some(targetChar => targetChar === currentChar);
      
      if (allSamePrefix) {
        result += currentChar;
      } else {
        break;
      }
    }
    
    return result;
  })));
}

module.exports = {
  shortPrefix
}