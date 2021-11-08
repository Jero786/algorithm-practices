const { getLongestSubstringWithoutRepeating } = require('.');

test('should return the longest substring without duplication', () => {
  // Arrange
  const text = 'clementisacap';
  // Act
  const result = getLongestSubstringWithoutRepeating(text);
  // Assert
  expect(result).toEqual('mentisac');
});

test('should return the longest substring without duplication longer', () => {
  // Arrange
  const text = 'abcdabcef';
  // Act
  const result = getLongestSubstringWithoutRepeating(text);
  // Assert
  expect(result).toEqual('dabcef');
});