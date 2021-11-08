const {getPalindromeSubstring} = require('.');

test("should indicate only one palindrome substring", () => {
  // Arrange
  const text = "a";
  // Act
  const result = getPalindromeSubstring(text);
  // Assert
  expect(result).toEqual(1);
});

test("should indicate only two palindrome substring", () => {
  // Arrange
  const text = "ab";
  // Act
  const result = getPalindromeSubstring(text);
  // Assert
  expect(result).toEqual(2);
});

test("should indicate only singles palindrome substring", () => {
  // Arrange
  const text = "abc";
  // Act
  const result = getPalindromeSubstring(text);
  // Assert
  expect(result).toEqual(3);
});

test("should indicate only singles palindrome substring longer", () => {
  // Arrange
  const text = "fdsklf";
  // Act
  const result = getPalindromeSubstring(text);
  // Assert
  expect(result).toEqual(6);
});

test("should indicate only singles palindrome substring", () => {
  // Arrange
  const text = "abc";
  // Act
  const result = getPalindromeSubstring(text);
  // Assert
  expect(result).toEqual(3);
});

test("should more several palindrome substring", () => {
  // Arrange
  const text = "aaa";
  // Act
  const result = getPalindromeSubstring(text);
  // Assert
  expect(result).toEqual(6);
});