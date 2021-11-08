const {isAnagram} = require('.');

test('should be indicate a anagram', () => {
  // Arrange
  const s = "anagram";
  const t = "nagaram"
  // Act
  const result = isAnagram(s, t);
  // Assert
  expect(result).toBeTruthy();
});