function exist(board, word) {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const row = board[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const letter = board[rowIndex][colIndex];
      
      if (word[0] === letter && dfs(board, rowIndex, colIndex, 0 , word)) {
        return true;
      }
    }
  }
  
  return false;
}

function dfs(board, rowIndex, colIndex, countLettersFound, word) {
  
  if (countLettersFound === word.length) {
    return true;
  }
  
  const columns = board[rowIndex];
  if (rowIndex < 0 ||
    rowIndex >= board.length ||
    colIndex < 0 ||
    colIndex >= columns.length ||
    columns[colIndex] !== word[countLettersFound]
  ) {
    return false;
  }
  
  const temp = board[rowIndex][colIndex];
  board[rowIndex][colIndex] = ' ';
  
  const found = dfs(board, rowIndex - 1, colIndex, countLettersFound + 1, word) ||
    dfs(board, rowIndex + 1, colIndex, countLettersFound + 1, word) ||
    dfs(board, rowIndex, colIndex + 1, countLettersFound + 1, word) ||
    dfs(board, rowIndex, colIndex - 1, countLettersFound + 1, word);
  
  board[rowIndex][colIndex] = temp;
  
  return found;
}

module.exports = {
  exist
};