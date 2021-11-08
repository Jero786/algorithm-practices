const {isBalanced, isBalancedRecursiveWay} = require('.');

test('The balanced brackets should be false', () => {
  // Arrange
  const expectedTrue = "NO";
  
  // Act
  const actualValue = isBalanced("()[]{}{");
  
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

test('The balanced brackets should be false in a recursive way', () => {
  // Arrange
  const expectedTrue = "NO";
  
  // Act
  const actualValue = isBalancedRecursiveWay("{]");
  
  // Assert
  expect(actualValue).toEqual(expectedTrue);
});

test('The balanced brackets should be true in a recursive way', () => {
  // Arrange
  const expectedTrue = "YES";
  
  // Act
  const actualValue = isBalancedRecursiveWay("{}");
  
  // Assert
  expect(actualValue).toEqual(expectedTrue);
});

test('The deep balanced brackets should be true in a recursive way', () => {
  // Arrange
  const expectedTrue = "YES";
  
  // Act
  const actualValue = isBalancedRecursiveWay("([{}])");
  
  // Assert
  expect(actualValue).toEqual(expectedTrue);
});
