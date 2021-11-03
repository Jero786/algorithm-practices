const {getPiramid} = require('.');

test('basic example', () => {
  // Arrange
  const amountLevels = 5;
  
  // Act
  const result = getPiramid(5);
  
  // Assert
  expect(result).toEqual(`    *
   ***
  *****
 *******
*********
`);
});