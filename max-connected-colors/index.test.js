const { maxConnected } = require('.');

test('max connected colors', () => {
  // Arrange
  const grid = [
    ['r', 'g', 'b'],
    ['r', 'r', 'r'],
    ['g', 'g', 'r'],
  ]
  
  // Act
  const result = maxConnected(grid);
  
  // Assert
  expect(result).toEqual(5);
});