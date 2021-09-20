const {multiStringSearch} = require('.');

test('multi-string', () => {
  // Arrange
  const bigString = "this is a big string";
  const smallStrings = ["this", "yo", "is", "a", "bigger", "string", "kappa"];
  
  // Act
  const result = multiStringSearch(bigString, smallStrings);
  
  // Assert
  expect(result).toEqual([true, false, true, true, false, true, false]);
});

test('multi-string use case two', () => {
  // Arrange
  const bigString = "abcdefghijklmnopqrstuvwxyz";
  const smallStrings = ["abc", "mnopqr", "wyz", "no", "e", "tuuv"];
  
  // Act
  const result = multiStringSearch(bigString, smallStrings);
  
  // Assert
  expect(result).toEqual([true, true, false, true, true, false]);
});

test('multi-string use case three', () => {
  // Arrange
  const bigString = "bbbabb";
  const smallStrings = ["bbabb"];
  
  // Act
  const result = multiStringSearch(bigString, smallStrings);
  
  // Assert
  expect(result).toEqual([true]);
});