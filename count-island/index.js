/*
Problem:

Given a 2 dimension array matrix of 0s and 1s,
count the number of islands of 1s. An island is
surrounded by a group of adjacent cells that are all 1s.
A cell can only be adjacent to each other horizontally and vertically.
*/

/**
 * Return the amount of islands visited, solved in a recursive way.
 * @param islandMatrix
 * @returns {number}
 */
const numIslandsInRecursiveWay  = (islandMatrix) => {
  
  if (!islandMatrix || islandMatrix.length === 0) {
    return 0;
  }
  let numIslands = 0;
  for(let y = 0; y < islandMatrix.length; y++) {
    for(let  x = 0; x < islandMatrix.length; x++) {
      if (islandMatrix[y][x]) {
        numIslands += getNumIslandsDeepFirstWay({islandMatrix, x, y});
      }
    }
  }
  return numIslands;
};

function getNumIslandsDeepFirstWay({islandMatrix, x, y}) {
  if (x < 0 || x >= islandMatrix.length || y < 0 || y >= islandMatrix.length || islandMatrix[y][x] === 0) {
    return 0;
  }
  
  islandMatrix[y][x] = 0; // in order to avoid to check twice this island
  
  getNumIslandsDeepFirstWay({islandMatrix, x: x - 1, y}); // adjacent left
  getNumIslandsDeepFirstWay({islandMatrix, x: x + 1, y}); // adjacent right
  getNumIslandsDeepFirstWay({islandMatrix, x, y: y - 1}); // adjacent top
  getNumIslandsDeepFirstWay({islandMatrix, x, y: y + 1}); // adjacent bottom
  
  return 1;
}

/**
 * Return the amount of islands visited, solved in a non-recursive way.
 * @param islandMatrix
 * @returns {number}
 */
const numIslands = (islandMatrix) => {
  
  if (!islandMatrix || islandMatrix.length === 0) {
    return 0;
  }
  
  const islandWithFlags = mapIslandToFlags(islandMatrix);
  const length = islandWithFlags.length;
  let numIslands = 0;
  
  const onIslandFound = (currentIsland, islandAdjacent) => {
    if (!islandAdjacent.isVisited) {
      islandAdjacent.isVisited = true;
      currentIsland.isVisited = true;
      numIslands++;
    }
  };
  
  // O(n2) quadratic time
  for (let y = 0; y < length; y++) {
    for (let x = 0; x < length; x++) {
      if (islandWithFlags[y][x]) {
        askIfExistIslandTop({islandWithFlags, x, y, onIslandFound});
        askIfExistIslandLeft({islandWithFlags, x, y, onIslandFound});
        askIfExistIslandBottom({islandWithFlags, x, y, onIslandFound});
        askIfExistIslandRight({islandWithFlags, x, y, onIslandFound});
      }
    }
  }
  
  return numIslands;
};

function askIfExistIslandTop({islandWithFlags, x, y, onIslandFound}) {
  const rowY = islandWithFlags[y - 1];
  if (rowY) {
    const islandAdjacent = rowY[x];
    if (islandAdjacent) {
      const currentIsland = islandWithFlags[y][x];
      onIslandFound(currentIsland, islandAdjacent);
    }
  }
}

function askIfExistIslandBottom({islandWithFlags, x, y, onIslandFound}) {
  const rowY = islandWithFlags[y + 1];
  if (rowY) {
    const islandAdjacent = rowY[x];
    if (islandAdjacent) {
      const currentIsland = islandWithFlags[y][x];
      onIslandFound(currentIsland, islandAdjacent);
    }
  }
}

function askIfExistIslandLeft({islandWithFlags, x, y, onIslandFound}) {
  const rowY = islandWithFlags[y];
  if (rowY) {
    const islandAdjacent = rowY[x - 1];
    if (islandAdjacent) {
      const currentIsland = islandWithFlags[y][x];
      onIslandFound(currentIsland, islandAdjacent);
    }
  }
}

function askIfExistIslandRight({islandWithFlags, x, y, onIslandFound}) {
  const rowY = islandWithFlags[y];
  if (rowY) {
    const islandAdjacent = rowY[x + 1];
    if (islandAdjacent) {
      const currentIsland = islandWithFlags[y][x];
      onIslandFound(currentIsland, islandAdjacent);
    }
  }
}

/**
 * Given a matrix with number of islands, return a matrix with islands objects.
 * @param matrix
 * @returns {[[]]}
 */
function mapIslandToFlags(matrix) {
  let islandWithFlags = [[]];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[y] && matrix[y][x]) {
        if (!islandWithFlags[y]) {
          islandWithFlags[y] = [];
        }
        islandWithFlags[y][x] = {isVisited: false};
      }
    }
  }
  return islandWithFlags;
}

module.exports = {
  numIslands,
  numIslandsInRecursiveWay,
};