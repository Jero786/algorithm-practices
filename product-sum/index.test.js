const {getSum} = require('.');

test('product sum', () => {
  // Arrange
  const numbers = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
  // Act
  const result = getSum(numbers);
  // Assert
  expect(result).toEqual(12);
});