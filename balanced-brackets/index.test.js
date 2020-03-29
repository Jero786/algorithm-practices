const {isBalanced} = require('.');

test('The balanced brackets should be false', () => {
  // Arrange
  const expectedTrue = "NO";
  
  // Act
  const actualValue = isBalanced("{]");
  
  // Assert
  expect(actualValue).toEqual(expectedTrue);
});

test('The balanced brackets should be true', () => {
  // Arrange
  const expectedTrue = "YES";
  
  // Act
  const actualValue = isBalanced("{}");
  
  // Assert
  expect(actualValue).toEqual(expectedTrue);
});

test('The deep balanced brackets should be true', () => {
  // Arrange
  const expectedTrue = "YES";
  
  // Act
  const actualValue = isBalanced("([{}])");
  
  // Assert
  expect(actualValue).toEqual(expectedTrue);
});
