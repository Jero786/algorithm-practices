function findWords(boggle, words) {
  const countRows = boggle.length;
  const countCols = boggle[0].length;
  const usedLetters = Array.from({length: countRows}, () => new Array(countCols).fill(false));
  const result = [];
  for (const targetWord of words) {
    for (let row = 0; row < countRows; row++) {
      for (let col = 0; col < countCols; col++) {
        if (boggle[row][col] === targetWord[0]) {
          usedLetters[row][col] = true;
          if (findWord(boggle, row, col, targetWord, usedLetters)) {
            result.push(targetWord);
          }
        }
      }
    }
  }
  
  return result;
}

function findWord(
  boggle,
  row,
  col,
  targetWord,
  usedLetters,
  letterFoundIndex = 0,
  stepsCount = 0
) {
  // Goal
  if (letterFoundIndex === targetWord.length - 1) return true;
  
  const isInRange = row >= 0 && row < boggle.length && col >= 0 && col < boggle[row].length;
  if (!isInRange) return false;
  
  const targetNextLetter = targetWord[letterFoundIndex + 1];
  const currentWord = boggle[row][col];
  let found = false;
  
  if (targetNextLetter === currentWord && !usedLetters[row][col]) {
    letterFoundIndex++;
    usedLetters[row][col] = true;
    stepsCount = 0;
    found = findWord(boggle, row, col, targetWord, usedLetters, letterFoundIndex, stepsCount);
  } else {
    if (stepsCount < 1)  {
      stepsCount++;
      // Horizontal & Vertical check
      found = findWord(boggle, row + 1, col, targetWord, usedLetters, letterFoundIndex, stepsCount) ||
        findWord(boggle, row - 1, col, targetWord, usedLetters, letterFoundIndex, stepsCount) ||
        findWord(boggle, row, col + 1, targetWord, usedLetters, letterFoundIndex, stepsCount) ||
        findWord(boggle, row, col - 1, targetWord, usedLetters, letterFoundIndex, stepsCount) ||
        // Diagonals check
        findWord(boggle, row - 1, col - 1, targetWord, usedLetters, letterFoundIndex, stepsCount) ||
        findWord(boggle, row - 1, col + 1, targetWord, usedLetters, letterFoundIndex, stepsCount) ||
        findWord(boggle, row + 1, col + 1, targetWord, usedLetters, letterFoundIndex, stepsCount) ||
        findWord(boggle, row + 1, col - 1, targetWord, usedLetters, letterFoundIndex, stepsCount);
    }
  }
  return found;
}

module.exports = {
  findWords
}