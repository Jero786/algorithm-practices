const {getLongestPalindrome, isPalindromeManual, getLongestPalindromeRecursiveWay} = require('.');

test('isPalindrome should be true', () => {
  // Arrange
  const string = 'ada';
  
  // Act
  const result = isPalindromeManual(string);
  
  // Assert
  expect(result).toEqual(true);
})

test('isPalindrome should be false', () => {
  // Arrange
  const string = 'add';
  
  // Act
  const result = isPalindromeManual(string);
  
  // Assert
  expect(result).toEqual(false);
})

test('should return the longest palindriome', () => {
  // Arrange
  const text = 'asdsa4564333339aasdsaa';
  
  // Act
  const result = getLongestPalindrome(text);
  const resultTwo = getLongestPalindromeRecursiveWay(text);
  
  // Assert
  expect(result).toEqual('aasdsaa');
  expect(resultTwo).toEqual('aasdsaa');
});

test('should return any palindriome', () => {
  // Arrange
  const text = 'as39axsdsaa';
  
  // Act
  const result = getLongestPalindrome(text);
  const resultTwo = getLongestPalindromeRecursiveWay(text);
  
  // Assert
  expect(result).toEqual('sds');
  expect(resultTwo).toEqual('sds');
});

test('should not return any palindriome', () => {
  // Arrange
  const text = 'as39ax3ds1a';
  
  // Act
  const result = getLongestPalindrome(text);
  const resultTwo = getLongestPalindromeRecursiveWay(text);
  
  // Assert
  expect(result).toEqual('');
  expect(resultTwo).toEqual('');
});