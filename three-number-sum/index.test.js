const {getAllTriplets, getAllTripletsBruteForce} = require('.');

test('should return all triplets brute force solution', () => {
  // Arrange
  const nums = [-1, 0, 1, 2, -1, -4];
  const target = 0;
  // Act
  const result = getAllTripletsBruteForce(nums, target);
  // Assert
  expect(result).toEqual([[-1, 0, 1], [-1, 2, -1], [0, 1, -1]]);
})

test('should return all triplets in efficient way', () => {
  // Arrange
  const nums = [-1, 0, 1, 2, -1, -4];
  const target = 0;
  // Act
  const result = getAllTriplets(nums, target);
  // Assert
  expect(result).toEqual([[-1, -1, 2], [-1, 0, 1]]);
})