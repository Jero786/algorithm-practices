
function shortPrefix(array) {
  return Array.from(new Set(array.map((word) => {
      let indexLetterSearch = 0;
      let searchingPrefix = true;
      while(searchingPrefix) {
        const targetLetter = word[indexLetterSearch];
        const hasSomeWordWithSameLetter = array
        .filter(text => text !== word)
        .map(targetWord => targetWord[indexLetterSearch])
        .some(letter => letter === targetLetter);
  
        if (hasSomeWordWithSameLetter) {
          indexLetterSearch++;
        } else {
          searchingPrefix = false;
        }
      }
      
      return word.substring(0, indexLetterSearch === 0 ? 1 : indexLetterSearch);
  })));
}

module.exports = {
  shortPrefix
}