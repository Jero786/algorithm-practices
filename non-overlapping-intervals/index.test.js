const {eraseOverlapIntervals} = require('.');

test('should erasae overlaping', () => {
  // Arrange
  const ranges = [[1, 2], [2, 3], [3, 4], [1, 3]];
  // Act
  const result = eraseOverlapIntervals(ranges);
  // Assert
  expect(result).toEqual(1);
});

test('should erasae overlaping when is duplicated', () => {
  // Arrange
  const ranges = [[1, 2], [1, 2], [1, 2]];
  // Act
  const result = eraseOverlapIntervals(ranges);
  // Assert
  expect(result).toEqual(2);
});