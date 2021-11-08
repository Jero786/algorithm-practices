/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all
 * four edges of the grid are all surrounded by water.
 *
 * Link: https://leetcode.com/problems/number-of-islands
 * @param world
 * @returns {number}
 */
function numIslands(world) {
  let countIsland = 0;
  for (let rowIndex = 0; rowIndex < world.length; rowIndex++) {
    for (let colIndex = 0; colIndex < world[rowIndex].length; colIndex++) {
      if (world[rowIndex][colIndex] === "1") {
        countIsland += dfs(world, rowIndex, colIndex)
      }
    }
  }
  
  return countIsland;
}

function dfs(world, rowIndex, colIndex) {
  if (
    rowIndex < 0 ||
    colIndex < 0 ||
    rowIndex >= world.length ||
    colIndex >= world[rowIndex].length ||
    world[rowIndex][colIndex] === '0'
  ) {
    return "0";
  }
  
  world[rowIndex][colIndex] = '0';
  
  dfs(world, rowIndex + 1, colIndex);
  dfs(world, rowIndex - 1, colIndex);
  dfs(world, rowIndex, colIndex + 1);
  dfs(world, rowIndex, colIndex - 1);
  
  return 1;
}

module.exports = {
  numIslands
}