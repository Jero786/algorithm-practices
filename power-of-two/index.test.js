const {isPowerOfTwo} = require('.');

test('power of two, given a integer should determine if it\'s a power of two', () => {
  // Arrange
  const number = 16;
  
  // Act
  const result = isPowerOfTwo(number);
  
  // Assert
  expect(result).toBeTruthy();
});

test('power of two, given a integer should determine if it\'s a power of two negative case', () => {
  // Arrange
  const number = 218;
  
  // Act
  const result = isPowerOfTwo(number);
  
  // Assert
  expect(result).toBeFalsy();
});