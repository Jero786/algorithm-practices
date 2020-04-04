const {countIsland} = require('./index');

test('count islands', () => {
  // Arrange
  const count = [
    [0,    1,    0,    1,    0],
    [0,    0,    1,    1,    1],
    [1,    0,    0,    1,    0],
    [0,    1,    1,    0,    0],
    [1,    0,    1,    0,    1]
  ];
  
  // Act
  const result = countIsland(count);
  
  // Assert
  expect(result).toEqual(6);
});