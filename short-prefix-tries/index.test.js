const {shortPrefix} = require('./index');

test("short prefix", () => {
  const dictionary = ["Carmelo", "Carrizo", "Alo", "x", "Alguna", "y"]
  
  // Act
  const result = shortPrefix(dictionary);
  
  // Assert
  expect(result).toEqual(["Car", "Al", "x", "y"]);
});