const {getMinimumWaitingTime} = require('.');

test('should return the minimum waiting time', () => {
  // Arrange
  const queries = [3, 2, 1, 2, 6];
  // Act
  const result = getMinimumWaitingTime(queries);
  // Assert
  expect(result).toEqual(17);
});