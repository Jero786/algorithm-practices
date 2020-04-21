const {getUniqueNumber} = require('.');

test('single number, given a non-empty array of integers, every element appears twice except for one', () => {
  // Arrange
  const numbers = [2, 2, 1];
  
  // Act
  const result = getUniqueNumber(numbers);
  
  // Assert
  expect(result).toBe(1);
});

test('single number, given a non-empty array of integers, every element appears twice except for one', () => {
  // Arrange
  const numbers = [4, 1, 2, 1, 2];
  
  // Act
  const result = getUniqueNumber(numbers);
  
  // Assert
  expect(result).toBe(4);
});