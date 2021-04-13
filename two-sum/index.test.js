const {getTwoSumBruteForSolution, getTwoSum} = require('.');

test('Two sum by brote force solution', () => {
  // Arrange
  const numbers = [2, 7, 11, 15];
  const target = 18;
  
  // Act
  const [indexOne, indexTwo] = getTwoSumBruteForSolution(numbers, target);
  
  // Assert
  expect(indexOne).toEqual(1);
  expect(indexTwo).toEqual(2);
});

test('Two sum by optimized way', () => {
  // Arrange
  const numbers = [2, 7, 11, 15];
  const target = 18;
  
  // Act
  const [indexOne, indexTwo] = getTwoSum(numbers, target);
  
  // Assert
  expect(indexOne).toEqual(1);
  expect(indexTwo).toEqual(2);
});