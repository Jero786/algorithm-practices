const {shortPrefix} = require('./index');

test("short prefix with trie", () => {
  const dictionary = ['jon', 'john', 'jack', 'techlead'];
  
  // Act
  const result = shortPrefix(dictionary);
  
  // Assert
  expect(result).toEqual(['jon', 'joh', 'ja', 't']);
});