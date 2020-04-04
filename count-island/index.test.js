const {
  numIslands,
  numIslandsInRecursiveWay
} = require('./index');

test('count islands in a non-empty matrix in a non-recursive way', () => {
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

test('count islands in a non-empty matrix in a recursive way', () => {
  // Arrange
  const matrix = [
    [0,    1,    0,    1,    0],
    [0,    0,    1,    1,    1],
    [1,    0,    0,    1,    0],
    [0,    1,    1,    0,    0],
    [1,    0,    1,    0,    1]
  ];
  
  // Act
  const result = numIslandsInRecursiveWay(matrix);
  
  // Assert
  expect(result).toEqual(6);
});

test('count islands with a empty matrix in a non-recursive way', () => {
  // Arrange
  const emptyMatrix = [];
  
  // Act
  const resultEmpty = numIslands(emptyMatrix);
  
  // Assert
  expect(resultEmpty).toEqual(0);
});

test('count islands with a empty matrix in a recursive way', () => {
  // Arrange
  const emptyMatrix = [];
  
  // Act
  const resultEmpty = numIslandsInRecursiveWay(emptyMatrix);
  
  // Assert
  expect(resultEmpty).toEqual(0);
});

test('count islands with undefined matrix in a non-recursive way', () => {
  // Arrange
  const emptyMatrix = undefined;
  
  // Act
  const resultEmpty = numIslands(emptyMatrix);
  
  // Assert
  expect(resultEmpty).toEqual(0);
});

test('count islands with undefined matrix in a recursive way', () => {
  // Arrange
  const emptyMatrix = undefined;
  
  // Act
  const result = numIslandsInRecursiveWay(emptyMatrix);
  
  // Assert
  expect(result).toEqual(0);
});