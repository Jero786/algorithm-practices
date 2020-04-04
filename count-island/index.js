/**
 * Return the amount of islands visited, solved in a non-recursive way.
 * @param islandMatrix
 * @returns {number}
 */
const countIsland = (islandMatrix) => {
  const newMatrix = mapIslandsToObjects(islandMatrix);
  const length = newMatrix.length;
  let count = 0;

  const onIslandFound = (currentIsland, island) => {
    if (!island.isVisited) {
      island.isVisited = true;
      currentIsland.isVisited = true;
      count++;
    }
  };
  
  // O(n2) quadratic time
  for (let y = 0; y < length; y++) {
    for (let x = 0; x < length; x++) {
      if (newMatrix[y][x]) {
        askIfExistIslandTop(newMatrix, x, y, onIslandFound);
        askIfExistIslandLeft(newMatrix, x, y, onIslandFound);
        askIfExistIslandBottom(newMatrix, x, y, onIslandFound);
        askIfExistIslandRight(newMatrix, x, y, onIslandFound);
      }
    }
  }
  
  return count;
};

function askIfExistIslandTop(matrix, x, y, callback) {
  const rowY = matrix[y - 1];
  if (rowY) {
    const island = rowY[x];
    if (island) {
      const currentIsland = matrix[y][x];
      callback(currentIsland, island);
    }
  }
}

function askIfExistIslandBottom(matrix, x, y, callback) {
  const rowY = matrix[y + 1];
  if (rowY) {
    const island = rowY[x];
    if (island) {
      const currentIsland = matrix[y][x];
      callback(currentIsland, island);
    }
  }
}

function askIfExistIslandLeft(matrix, x, y, callback) {
  const rowY = matrix[y];
  if (rowY) {
    const island = rowY[x - 1];
    if (island) {
      const currentIsland = matrix[y][x];
      callback(currentIsland, island);
    }
  }
}

function askIfExistIslandRight(matrix, x, y, callback) {
  const rowY = matrix[y];
  if (rowY) {
    const island = rowY[x + 1];
    if (island) {
      const currentIsland = matrix[y][x];
      callback(currentIsland, island);
    }
  }
}

/**
 * Convert Islands to Object.
 * @param matrix
 * @returns {[[]]}
 */
function mapIslandsToObjects(matrix) {
  let newMatrix = [[]];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[y] && matrix[y][x]) {
        if (!newMatrix[y]) {
          newMatrix[y] = [];
        }
        newMatrix[y][x] = {isVisited: false};
      }
    }
  }
  return newMatrix;
}


module.exports = {
  countIsland,
};