const {
  numIslands,
} = require('./index');

test('count islands in a non-empty matrix in a recursive way', () => {
  // Arrange
  const matrix = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ]
  
  // Act
  const result = numIslands(matrix);
  
  // Assert
  expect(result).toEqual(1);
});