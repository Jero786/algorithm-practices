const {fibonacci, fibonacciRecursiveWay} = require('.');

test('fibonacci should be return the sequence of number 1', () => {
  // Arrange
  const number = 2;
  
  // Act
  const result = fibonacci(number);
  const resultTwo = fibonacciRecursiveWay(number);
  
  // Assert
  expect(result).toEqual(2);
  expect(resultTwo).toEqual(2);
})

test('fibonacci should be return the sequence of number 3', () => {
  // Arrange
  const number = 3;
  
  // Act
  const result = fibonacci(number);
  const resultTwo = fibonacciRecursiveWay(number);
  
  // Assert
  expect(result).toEqual(3);
  expect(resultTwo).toEqual(3);
})

test('fibonacci should be return the sequence of number 13', () => {
  // Arrange
  const number = 13;
  
  // Act
  const result = fibonacci(number);
  const resultTwo = fibonacciRecursiveWay(number);
  
  // Assert
  expect(result).toEqual(377);
  expect(resultTwo).toEqual(377);
})