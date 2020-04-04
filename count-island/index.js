/**
 * Return the amount of islands visited, solved in a non-recursive way.
 * @param islandMatrix
 * @returns {number}
 */
const countIsland = (islandMatrix) => {
  const islandWithFlags = mapIslandToFlags(islandMatrix);
  const length = islandWithFlags.length;
  let count = 0;

  const onIslandFound = (currentIsland, islandAdjacent) => {
    if (!islandAdjacent.isVisited) {
      islandAdjacent.isVisited = true;
      currentIsland.isVisited = true;
      count++;
    }
  };
  
  // O(n2) quadratic time
  for (let y = 0; y < length; y++) {
    for (let x = 0; x < length; x++) {
      if (islandWithFlags[y][x]) {
        askIfExistIslandTop(islandWithFlags, x, y, onIslandFound);
        askIfExistIslandLeft(islandWithFlags, x, y, onIslandFound);
        askIfExistIslandBottom(islandWithFlags, x, y, onIslandFound);
        askIfExistIslandRight(islandWithFlags, x, y, onIslandFound);
      }
    }
  }
  
  return count;
};

function askIfExistIslandTop(matrix, x, y, callback) {
  const rowY = matrix[y - 1];
  if (rowY) {
    const islandAdjacent = rowY[x];
    if (islandAdjacent) {
      const currentIsland = matrix[y][x];
      callback(currentIsland, islandAdjacent);
    }
  }
}

function askIfExistIslandBottom(matrix, x, y, callback) {
  const rowY = matrix[y + 1];
  if (rowY) {
    const islandAdjacent = rowY[x];
    if (islandAdjacent) {
      const currentIsland = matrix[y][x];
      callback(currentIsland, islandAdjacent);
    }
  }
}

function askIfExistIslandLeft(matrix, x, y, callback) {
  const rowY = matrix[y];
  if (rowY) {
    const islandAdjacent = rowY[x - 1];
    if (islandAdjacent) {
      const currentIsland = matrix[y][x];
      callback(currentIsland, islandAdjacent);
    }
  }
}

function askIfExistIslandRight(matrix, x, y, callback) {
  const rowY = matrix[y];
  if (rowY) {
    const islandAdjacent = rowY[x + 1];
    if (islandAdjacent) {
      const currentIsland = matrix[y][x];
      callback(currentIsland, islandAdjacent);
    }
  }
}

/**
 * Convert Islands to Object.
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
  countIsland,
};