const {isValidSubsequence} = require('.');

test('isValidSubsequence', () => {
  // Arrange
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  
  // Act
  const result = isValidSubsequence(array, sequence);
  
  // Assert
  expect(result).toBeTruthy();
});
