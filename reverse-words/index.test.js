const {reverse} = require('.');

test('should reverse a small list words', () => {
  // Arrange
  const text = 'geeks quiz practice code';
  // Act
  const result = reverse(text);
  // Assert
  expect(result).toEqual('code practice quiz geeks');
});