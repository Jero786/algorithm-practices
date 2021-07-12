const RED_COLOR = 'r';
const GREEN_COLOR = 'g';
const BLUE_COLOR = 'b';

function maxConnected(grid) {
  const colorCounts = {
    [RED_COLOR]: 0,
    [GREEN_COLOR]: 0,
    [BLUE_COLOR]: 0,
  }
  let visited = [[]];
  for (let indexRow = 0; indexRow < grid.length; indexRow++) {
    const row = grid[indexRow];
    for (let indexColumn = 0; indexColumn < row.length; indexColumn++) {
      const currentColor = grid[indexRow][indexColumn];
      colorCounts[currentColor] = colorCounts[currentColor] + amountNearCells(grid, indexRow, indexColumn, currentColor, visited);
    }
  }
  
  return getMaxColorCountFound(colorCounts);
}

function amountNearCells(grid, indexRow, indexColumn, targetColor, visited = [[]]) {
  if (!visited[indexRow]) {
    visited[indexRow] = [];
  }
  
  if (
    indexRow >= grid.length ||
    indexColumn >= grid.length ||
    indexRow < 0 ||
    indexColumn < 0 ||
    targetColor !== grid[indexRow][indexColumn] ||
    visited[indexRow] && visited[indexRow][indexColumn]
  ) return 0;
  
  visited[indexRow][indexColumn] = true;
  
  return 1 + amountNearCells(grid, indexRow + 1, indexColumn, targetColor, visited) +
    amountNearCells(grid, indexRow - 1, indexColumn, targetColor, visited) +
    amountNearCells(grid, indexRow, indexColumn + 1, targetColor, visited) +
    amountNearCells(grid, indexRow, indexColumn - 1, targetColor, visited);
}

function getMaxColorCountFound(colorCounts) {
  return Object.entries(colorCounts).sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] === b[1]) return 0;
    return 1
  }).shift()[1];
}

module.exports = {
  maxConnected
}