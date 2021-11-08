const {searchInRotatedSortedArray} = require(".");

test('search in rotated sorted array', () => {
  // Arrange
  const numbers = [4,5,6,7,0,1,2];
  const target = 0;
  // ActR
  const result = searchInRotatedSortedArray(numbers, target);
  // Assert
  expect(result).toEqual(4)
});