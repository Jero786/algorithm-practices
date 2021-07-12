const {search} = require('.');

test('should be exist', () => {
  // Arrange
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  
  // Act
  const result = search(array, 6);
  
  // Assert
  expect(result).toBeTruthy();
});
