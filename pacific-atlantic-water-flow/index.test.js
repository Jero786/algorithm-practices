const {getCellsFlowToAtlanticAndPacific} = require('.');

test('should return the cells which flows for atlantic and ocean', () => {
  // Arrange
  const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ];
  // Act
  const result = getCellsFlowToAtlanticAndPacific(heights);
  // Assert
  expect(result).toEqual([[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]);
});