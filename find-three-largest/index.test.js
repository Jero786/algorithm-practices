const {findThreeLargest, findThreeLargestShiftingArray} = require('.');

test('find three largest', () => {
  // Arrange
  const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  
  // Act
  const result = findThreeLargest(array);
  
  // Assert
  expect(result).toEqual([18, 141, 541]);
});

test('find three largest with shifting', () => {
  // Arrange
  const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  
  // Act
  const result = findThreeLargestShiftingArray(array);
  
  // Assert
  expect(result).toEqual([18, 141, 541]);
});