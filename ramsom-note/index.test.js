const {canSpell} = require('.');

test('should return true', () => {
  // Arrange
  const magazine = ['a', 'b', 'c', 'd', 'e'];
  const word = 'bed';
  
  // Act
  const result = canSpell(magazine, word);
  
  // Assert
  expect(result).toBeTruthy();
});

test('should return false', () => {
  // Arrange
  const magazine = ['a', 'b', 'c', 'd', 'e'];
  const word = 'cat';
  
  // Act
  const result = canSpell(magazine, word);
  
  // Assert
  expect(result).toBeFalsy();
});