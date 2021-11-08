function findWords(matrix, words) {
  if (!words || words.length === 0 || !matrix || matrix.length === 0) return [];
  
  const usedCells = Array.from({length: matrix.length}, () => new Array(matrix[0].length).fill(false));
  let result = [];
  for (const word of words) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        const firstLetterTarget = word[0];
        if (matrix[row][col] === firstLetterTarget && !usedCells[row][col]) {
          if (existWord(matrix, word, usedCells)) {
            result.push(word);
          }
        }
      }
    }
  }
  return result;
}

function existWord(
  matrix,
  word,
  usedCells,
  // recursive params.
  indexLetterFound = 0,
  row = 0,
  col = 0,
  steps = 0,
  textFound = ''
) {
  
  // exist/goal
  if (indexLetterFound === word.length) return true;
  
  const isInRange = row < matrix.length &&
    row >= 0 &&
    col < matrix[row].length &&
    col >= 0;
  
  let isFound = false;
  
  if (isInRange) {
    const targetLetter = word[indexLetterFound];
    if (matrix[row][col] === targetLetter && !usedCells[row][col]) {
      steps = 0;
      usedCells[row][col] = true;
      isFound = existWord(matrix, word, usedCells, indexLetterFound + 1, row, col, steps, textFound)
    } else {
      if (steps === 0) { // only search for adjacent cells
        steps++;
       isFound = existWord(matrix, word, usedCells, indexLetterFound, row - 1, col, steps) ||
        existWord(matrix, word, usedCells, indexLetterFound, row - 1, col - 1, steps) ||
        existWord(matrix, word, usedCells, indexLetterFound, row, col - 1, steps) ||
        existWord(matrix, word, usedCells, indexLetterFound, row + 1, col - 1, steps) ||
        existWord(matrix, word, usedCells, indexLetterFound, row + 1, col, steps) ||
        existWord(matrix, word, usedCells, indexLetterFound, row + 1, col + 1, steps) ||
        existWord(matrix, word, usedCells, indexLetterFound, row, col + 1, steps) ||
        existWord(matrix, word, usedCells, indexLetterFound, row - 1, col + 1, steps);
      }
    }
  }
  
  return isFound;
}

module.exports = {
  findWords
}