const {getFirstUniqueCharacter} = require('.');

test('Unique character, given a text should return the first unique character', () => {
  // Arrange
  const text = 'leetcode';
  
  // Act
  const result = getFirstUniqueCharacter(text);
  
  // Assert
  expect(result).toBe(0);
});

test('Unique character, given a text should return the first unique character', () => {
  // Arrange
  const text = 'loveleetcode';
  
  // Act
  const result = getFirstUniqueCharacter(text);
  
  // Assert
  expect(result).toBe(2);
});