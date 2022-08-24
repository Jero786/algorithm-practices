const { searchInRotatedSortedArray } = require('.');

test('search in rotated sorted array', () => {
  // Arrange
  const numbers = [4, 5, 6, 7, 0, 1, 2];
  const target = 0;
  // ActR
  const result = searchInRotatedSortedArray(numbers, target);
  // Assert
  expect(result).toEqual(4);
});

test('search in rotated sorted array - case 2', () => {
  // Arrange
  const numbers = [5, 1, 3];
  const target = 1;
  // ActR
  const result = searchInRotatedSortedArray(numbers, target);
  // Assert
  expect(result).toEqual(1);
});
