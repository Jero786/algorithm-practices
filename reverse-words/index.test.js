const {reverse, reverseWithoutSplit} = require('.');

test('should reverse a small list words', () => {
  // Arrange
  const text = 'geeks quiz practice code';
  // Act
  const result = reverse(text);
  // Assert
  expect(result).toEqual('code practice quiz geeks');
});

test('should reverse a small list words', () => {
  // Arrange
  const text = 'AlgoExpert is the best!';
  // Act
  const result = reverseWithoutSplit(text);
  // Assert
  expect(result).toEqual('best! the is AlgoExpert');
});