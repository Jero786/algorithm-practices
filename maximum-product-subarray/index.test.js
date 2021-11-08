const {maximumSubarray} = require('.');

test('maximum subarray with result of positive numbers', () => {
  // Arrange
  const array = [2,3,-2,4];
  // Act
  const result = maximumSubarray(array);
  // Assert
  expect(result).toEqual(6); // [4,-1,2,1] has the largest sum = 6.
});
