function reverse(text) {
  let words = text.split(' ');
  let left = 0;
  let right = words.length - 1;
  while(left < right) {
      words = swap(words, left, right);
      left++;
      right--;
  }
  return words.join(' ');
}

function swap(array, index, indexNew) {
  const temp = array[index];
  array[index] = array[indexNew];
  array[indexNew] = temp;
  return array;
}

function reverseWithoutSplit(string) {
  // check adges
  if (!string) return "";
  if (string.length === 1) return string;
  
  
  return getWordsAndSpaces(string);
}

function getWordsAndSpaces(string) {
  const result = [];
  let word = '';
  let spaces = '';
  
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter === ' ') {
      if (word.length > 0) {
        result.unshift(word);
        word = '';
      }
      spaces += ' ';
    } else {
      if (spaces.length > 0) {
        result.unshift(spaces);
        spaces = '';
      }
      word += letter;
    }
  }
  
  result.unshift(word ? word : spaces)
  
  return result.reduce((text, word) => text + word, '');
}

module.exports = {
  reverse,
  reverseWithoutSplit
}