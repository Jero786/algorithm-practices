const {
  numIslands,
  numIslandsInRecursiveWay
} = require('./index');

test('count islands in a non-empty matrix', () => {
  // Arrange
  const matrix = [
    [0,    1,    0,    1,    0],
    [0,    0,    1,    1,    1],
    [1,    0,    0,    1,    0],
    [0,    1,    1,    0,    0],
    [1,    0,    1,    0,    1]
  ];
  
  // Act
  const result = numIslands(matrix);
  
  // Assert
  expect(result).toEqual(6);
});

test('count islands with a empty matrix', () => {
  // Arrange
  const emptyMatrix = [];
  
  // Act
  const resultEmpty = numIslands(emptyMatrix);
  
  // Assert
  expect(resultEmpty).toEqual(0);
});

test('count islands with undefined matrix', () => {
  // Arrange
  const emptyMatrix = undefined;
  
  // Act
  const resultEmpty = numIslands(emptyMatrix);
  const resultEmptyTwo = numIslandsInRecursiveWay(emptyMatrix);
  
  // Assert
  expect(resultEmpty).toEqual(0);
  expect(resultEmptyTwo).toEqual(0);
});