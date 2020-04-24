const {flattenArray} = require('.');

test('flatten array', () => {
  // Arrange
  const array = [1,2,[3], [[4]]];
  
  // Act
  const result = flattenArray(array);
  
  // Assert
  expect(result.length).toBe(4);
  expect(result[0]).toBe(1);
  expect(result[1]).toBe(2);
  expect(result[2]).toBe(3);
  expect(result[3]).toBe(4);
});
