/**
 * Problem:
 *
 * Each cell has a state: ON (1) or OFF (0).
 * After each second, a cell changes it state by the next predicate:
 * If the cells around it are both ON or OFF,
 * then the cell state becomes ON. Otherwise, it turns OFF.
 *
 * Given the actual cell states and the seconds we need to predict,
 * return the states that the cells would have after those seconds.
 */
function calculateCellActivityBySec({cells, seconds}) {
  for (let i = 0; i < seconds; i++) {
    for (let j = 0; j < cells.length; j++) {
      cells = processCell(j, cells);
    }
  }
  return cells;
}

function processCell(indexCell, cells) {
  let previousCell = cells[indexCell - 1];
  let nextCell = cells[indexCell + 1];
  
  const isFirstCell = indexCell === 0;
  const isLastCell = indexCell === cells.length - 1;
  
  if (isFirstCell && nextCell === 0) {
    // enter here when is the first one and the second row is OFF
    // so turn O
    cells[indexCell + 1] = 1;
  } else if (isLastCell && previousCell === 0) {
    // enter here when iterate last cell and the previously is OFF
    cells[indexCell - 1] = 1;
  } else {
    // enter here most of the time.
    if (previousCell === nextCell) {
      const isOff = nextCell === 0;
      if (isOff) {
        cells[indexCell - 1] = 1;
        cells[indexCell + 1] = 1;
      } else {
        cells[indexCell - 1] = 0;
        cells[indexCell + 1] = 0;
      }
    }
  }
  return cells;
}

module.exports = {
  calculateCellActivityBySec
};
