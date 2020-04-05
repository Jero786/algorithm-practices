const {calculateCellActivityBySec} = require('.');

test('Cell activity should calculate the final state the same as the initial', () => {
  // Arrange
  const cells = [1,0,1,0,1,0,1,0];
  const seconds = 2;
  
  // Act
  const nextCellState = calculateCellActivityBySec({cells, seconds});
  
  // Assert
  expect(nextCellState).toEqual(cells);
});

test('Cell activity should calculate the final state which is different', () => {
  // Arrange
  const cells = [0, 0, 0, 1, 0, 0, 0, 1];
  const seconds = 2;
  
  // Act
  const nextCellState = calculateCellActivityBySec({cells, seconds});
  
  // Assert
  expect(JSON.stringify(nextCellState)).toEqual(JSON.stringify([0, 0, 0, 1, 0, 1, 1, 0]));
});