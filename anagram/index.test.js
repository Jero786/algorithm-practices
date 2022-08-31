const { isAnagram } = require('.');

test('should be indicate a anagram', () => {
  // Arrange
  const s = 'anagram';
  const t = 'nagaram';
  // Act
  const result = isAnagram(s, t);
  // Assert
  expect(result).toBeTruthy();
});

test('should be indicate a anagram case two', () => {
  // Arrange
  const s = 'anagram';
  const t = 'nagarrm';
  // Act
  const result = isAnagram(s, t);
  // Assert
  expect(result).toBeFalsy();
});
