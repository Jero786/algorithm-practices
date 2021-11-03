const {subsets} = require('.');

test('xxx', () => {
  // Arrange
  const numbers = [1, 2, 3];
  // Act
  const result = subsets(numbers);
  // Assert
  expect(result).toEqual([[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]);
});