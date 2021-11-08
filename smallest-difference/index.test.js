const {getSmallestDifference} = require('.');

test('should return smallest difference', () => {
  // Arrange
  const arrayOne = [-1, 5, 10, 20, 28, 3];
  const arrayTwo = [26, 134, 135, 15, 17];
  // Act
  const result = getSmallestDifference(arrayOne, arrayTwo);
  // Assert
  expect(result).toEqual([28, 26]);
});