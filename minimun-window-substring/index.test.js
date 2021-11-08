const {getMinimumWindowSubstring} = require('.');

test('should return the minimum window substring', () => {
  // Arrange
  const largeText = 'ADOBECODEBANC';
  const smallText = 'ABC';
  // Act
  const result = getMinimumWindowSubstring(largeText, smallText);
  // Assert
  expect(result).toEqual('BANC');
});