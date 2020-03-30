const {getLongestPalindrome} = require('.');

test('should return the longest palindriome', () => {
  // Arrange
  const text = 'asdsa4564333339aasdsaa';
  
  // Act
  const result = getLongestPalindrome(text);
  
  // Assert
  expect(result).toEqual('aasdsaa');
});
test('should return any palindriome', () => {
  // Arrange
  const text = 'as39axsdsaa';
  
  // Act
  const result = getLongestPalindrome(text);
  
  // Assert
  expect(result).toEqual('sds');
});

test('should not return any palindriome', () => {
  // Arrange
  const text = 'as39ax3ds1a';
  
  // Act
  const result = getLongestPalindrome(text);
  
  // Assert
  expect(result).toEqual('');
});