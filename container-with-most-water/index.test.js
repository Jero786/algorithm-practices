const {maxArea} = require('.');

test('contain with most water', () => {
  // Arrange
  const numbers = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  // Act
  const result = maxArea(numbers);
  // Assert
  expect(result).toEqual(49);
});