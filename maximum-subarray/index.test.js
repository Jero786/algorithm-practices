const { maximumSubarray } = require('.');

test('maximum subarray with result of positive numbers', () => {
  // Arrange
  const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  // Act
  const result = maximumSubarray(array);
  // Assert
  expect(result).toEqual(6); // [4,-1,2,1] has the largest sum = 6.
});

test('maximum subarray with result of positive numbers', () => {
  // Arrange
  const array = [-1];
  // Act
  const result = maximumSubarray(array);
  // Assert
  expect(result).toEqual(-1);
});
