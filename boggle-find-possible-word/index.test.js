const {findWords} = require('.');

test('boggle find possible words', () => {
  // Arrange
  const boggle = [
    ["G", "I", "Z"],
    ["U", "E", "K"],
    ["Q", "S", "E"],
  ];
  const dictionary = ["GEEK", "FOR", "GO"];
  
  // Act
  const result = findWords(boggle, dictionary);
  
  // Assert
  expect(result).toEqual(["GEEK"]);
});

test('boggle find possible words with several possible paths with CASA', () => {
  // Arrange
  const boggle = [
    ["C", "A", "T"],
    ["A", "A", "E"],
    ["Y", "A", "S"],
  ];
  const dictionary = ["CASA"];
  
  // Act
  const result = findWords(boggle, dictionary);
  
  // Assert
  expect(result).toEqual(["CASA"]);
});

test('boggle find possible words with several possible paths CAYA', () => {
  // Arrange
  const boggle = [
    ["C", "A", "T"],
    ["A", "A", "E"],
    ["Y", "A", "S"],
  ];
  const dictionary = ["CASA"];
  
  // Act
  const result = findWords(boggle, dictionary);
  
  // Assert
  expect(result).toEqual(["CASA"]);
});