const {getAllPermutations} = require('.');

test('should make all permutation possible', () => {
  // Arrange
  const numbers = [1, 2, 3];
  // Act
  const result = getAllPermutations(numbers);
  // Assert
  expect(result).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
});