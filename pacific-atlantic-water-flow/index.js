/**
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
 * The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
 * The island is partitioned into a grid of square cells. You are given an m x n integer matrix
 * heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
 * The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south,
 * east, and west if the neighboring cell's height is less than or equal to the current cell's height.
 * Water can flow from any cell adjacent to an ocean into the ocean.
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci)
 * to both the Pacific and Atlantic oceans.
 * @param matrix
 * @returns {[]}
 */
function getCellsFlowToAtlanticAndPacific(matrix) {
  // load matrix cells
  let pacific = Array.from({length: matrix.length}, _ => Array.from({length: matrix[0].length}));
  let atlantic = Array.from({length: matrix.length}, _ => Array.from({length: matrix[0].length}));
  
  // load top and bottom
  for (let colIndex = 0; colIndex < matrix[0].length; colIndex++) {
    pacific = dfs(matrix, 0, colIndex, Number.MIN_VALUE, pacific);
    atlantic = dfs(matrix, matrix.length - 1, colIndex, Number.MIN_VALUE, atlantic);
  }
  // load left and right
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    pacific = dfs(matrix, rowIndex, 0, Number.MIN_VALUE, pacific);
    atlantic = dfs(matrix, rowIndex, matrix[rowIndex].length - 1, Number.MIN_VALUE, atlantic);
  }
  
  let result = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
      if (pacific[rowIndex][colIndex] === 1 && atlantic[rowIndex][colIndex] === 1) {
        result.push([rowIndex, colIndex]);
      }
    }
  }
  
  return result;
}

function dfs(matrix, rowIndex, colIndex, prevValue, ocean) {
  if (
    rowIndex < 0 || rowIndex > matrix.length - 1 ||
    colIndex < 0 || colIndex > matrix[rowIndex].length - 1
  ) {
    return ocean;
  } else if (matrix[rowIndex][colIndex] < prevValue) {
    // enter here means that the water can not flowing.
    // only less or equal cells the water can flow.
    // we are transversing the island from the land to the ocean,
    // so higher to lower terrains.
    return ocean;
  } else if (ocean[rowIndex][colIndex] === 1) {
    return ocean;
  }
  
  ocean[rowIndex][colIndex] = 1;
  
  dfs(matrix, rowIndex - 1, colIndex, matrix[rowIndex][colIndex], ocean);
  dfs(matrix, rowIndex + 1, colIndex, matrix[rowIndex][colIndex], ocean);
  dfs(matrix, rowIndex, colIndex - 1, matrix[rowIndex][colIndex], ocean);
  dfs(matrix, rowIndex, colIndex + 1, matrix[rowIndex][colIndex], ocean);
  
  return ocean;
}


module.exports = {
  getCellsFlowToAtlanticAndPacific
}