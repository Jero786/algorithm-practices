const {sortFilenamesByLexicographicOrder} = require('.');

test('should sort the filenames', () => {
  // Arrange
  const filenames = [
    'zebra.gif',
    'file2something.gif',
    'apply.gif',
    'file.gif',
    'file1.gif',
    'file10.gif',
    'file2zebra.gif',
  ]
  // Act
  const result = sortFilenamesByLexicographicOrder(filenames);
  // Assert
  expect(result).toEqual(
    [
      "apply.gif",
      "file.gif",
      "file1.gif",
      "file2something.gif",
      "file2zebra.gif",
      "file10.gif",
      "zebra.gif",
    ]
  );
  
});