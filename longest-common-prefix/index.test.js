const {getLongestCommonPrefix} = require('.');

test('longest common prefix', () => {
  // Arrange
  const dictionary = ['flower', 'flow', 'flight'];
  
  // Act
  const result = getLongestCommonPrefix(dictionary);
  
  // Assert
  expect(result).toBe('fl');
});

test('longest common prefix empty', () => {
  // Arrange
  const dictionary = ['xlower', 'flow', 'glight'];
  
  // Act
  const result = getLongestCommonPrefix(dictionary);
  
  // Assert
  expect(result).toBe('');
});