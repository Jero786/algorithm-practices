const {unionArray} = require('.');

test('union sorted array', () => {
  // Arrange
  const arrayOne = [1, 2, 4, 5, 7];
  const arrayTwo = [3, 6, 8];
  // Act
  const result = unionArray(arrayOne, arrayTwo);
  // Assert
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});