const {nonConstructibleChange} = require('.');

test('nonConstructibleChange', () => {
  // Arrange
  const coins = [5, 7, 1, 1, 2, 3, 22];
  
  // Act
  const result = nonConstructibleChange(coins);
  
  // Assert
  expect(result).toEqual(20);
});