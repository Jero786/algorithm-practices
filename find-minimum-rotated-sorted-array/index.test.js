const { getMinimumRotatedSortedArray} = require('.');

test('find minimum rotated sorted array', () => {
  // Arrange
  const numbers = [3,4,5,1,2];
  // Act
  const result = getMinimumRotatedSortedArray(numbers);
  // Assert
  expect(result).toEqual(1);
});