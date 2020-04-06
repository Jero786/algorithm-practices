const { getMaxAreaGivenSquares } = require('.');

test('Graph Bars should return the mayor are given graph values', () => {
  // Arrange
  const graph = [1, 2, 3, 2, 1];
  
  // Act
  const result = getMaxAreaGivenSquares(graph);
  
  // Assert
  expect(result).toEqual(6);
});