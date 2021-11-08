const {groupAnagrams} = require('.');

test('simple group anagram', () => {
  // Arrange
  const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];
  // Act
  const result = groupAnagrams(anagrams);
  // Assert
  expect(result).toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]])
});