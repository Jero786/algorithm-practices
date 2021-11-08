c
test('should return an array of equal parts', () => {
  // Arrange
  const numbers = [2, 4, 5, 3, 3, 9, 2, 2, 2];
  const target = 6;
  // Act
  const result = getEqualParts(numbers, target);
  // Assert
  expect(result).toEqual([
    [2, 4], [3, 3], [2, 2, 2]
  ])
});