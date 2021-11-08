const {generateDocument} = require('.');

test('should generate document', () => {
  // Arrange
  const string = 'Bste!hetsi ogEAxpelrt x ';
  const document = 'AlgoExpert is the Best!';
  // Act
  const result = generateDocument(string, document);
  // Assert
  expect(result).toEqual(true)
});