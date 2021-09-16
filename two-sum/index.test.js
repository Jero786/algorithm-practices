const {getTwoSumBruteForSolution, getTwoSum} = require('.');

test('Two sum by brote force solution', () => {
  // Arrange
  const numbers = [3, 5, -4, 8, 11, 1, -1, 6];
  const target = 10;
  
  // Act
  const [indexOne, indexTwo] = getTwoSumBruteForSolution(numbers, target);
  
  // Assert
  expect(indexOne).toEqual(11);
  expect(indexTwo).toEqual(-1);
});

test('Two sum by optimized way', () => {
  // Arrange
  const numbers = [3, 5, -4, 8, 11, 1, -1, 6];
  const target = 10;
  
  // Act
  const [indexOne, indexTwo] = getTwoSum(numbers, target);
  console.log(`indexOne: ${indexOne}, indexTwo: ${indexTwo}`)
  // Assert
  expect(indexOne).toEqual(11);
  expect(indexTwo).toEqual(-1);
});