const {arrayOfProductsBruteForce, arrayOfProducts} = require('.');

test('should turn-to array of products in a bruteforce way', () => {
  // Arrange
  const numbers = [5, 1, 4, 2];
  // Act
  const result = arrayOfProductsBruteForce(numbers);
  // Assert
  expect(result).toEqual([8, 40, 10, 20]);
});

test('should turn-to array of products', () => {
  // Arrange
  const numbers = [5, 1, 4, 2];
  // Act
  const result = arrayOfProducts(numbers);
  // Assert
  expect(result).toEqual([8, 40, 10, 20]);
});