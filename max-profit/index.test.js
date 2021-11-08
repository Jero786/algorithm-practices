const {maxProfit} = require('.');

test('max profit', () => {
  // Arrange
  const prices = [2,1,2,1,0,1,2];
  // Act
  const result = maxProfit(prices);
  // Assert
  expect(result).toEqual(2)
});
