const {getLongestRepeatedCharacter} = require('.');

test('should return longest repeated character', () => {
  // Arrange
  const text = "ABAB";
  const maxAllowedChanges = 2;
  // Act
  const result = getLongestRepeatedCharacter(text, maxAllowedChanges);
  // Assert
  expect(result).toEqual(4);
});

test('should return longest repeated character bigger text', () => {
  // Arrange
  const text = "AABABBA";
  const maxAllowedChanges = 1;
  // Act
  const result = getLongestRepeatedCharacter(text, maxAllowedChanges);
  // Assert
  expect(result).toEqual(5);
});