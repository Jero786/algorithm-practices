const {sortArray} = require('.');

test('sort small numbers', () => {
  // Arrange
  const smallArray = [1, 4, 3, 2];
  
  // Act
  const result = sortArray(smallArray);
  
  // Accert
  expect(result).toEqual([1, 2, 3, 4]);
});

test('sort medium numbers', () => {
  // Arrange
  const smallArray = [1, 4, 3, 2, 7, 8, 9, 10, 6, 5];
  
  // Act
  const result = sortArray(smallArray);
  
  // Accert
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});