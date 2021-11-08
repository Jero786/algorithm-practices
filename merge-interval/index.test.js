const {getIntervals} = require('.');

test('merge intervals with a single negative numbers', () => {
  // Arrange
  const numbers = [[-20, 30]];
  
  // Act
  const result = getIntervals(numbers);
  
  // Assert
  expect(result).toEqual([[-20, 30]]);
});

test('merge intervals with positive numbers', () => {
  // Arrange
  const numbers = [[1, 3], [2, 6], [8, 10], [15, 18]];
  
  // Act
  const result = getIntervals(numbers);
  
  // Assert
  expect(result).toEqual([[1, 6], [8, 10], [15, 18]]);
});

test('merge intervals with positive numbers only two', () => {
  // Arrange
  const numbers = [[1, 4], [2, 3]];
  
  // Act
  const result = getIntervals(numbers);
  
  // Assert
  expect(result).toEqual([[1, 4]]);
});