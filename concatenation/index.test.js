const {getConcatenatedWords} = require('.');

test('word concatenation', () => {
  // Arrange
  const words = ['cat', 'cats', 'dog', 'catsdog'];
  
  // Act
  const result = getConcatenatedWords(words);
  
  // Assert
  expect(result).toEqual(['catsdog']);
});