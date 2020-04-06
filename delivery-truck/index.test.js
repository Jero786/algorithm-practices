const {getBestPath} = require('.');

test('Delivery track should return the routes which contain max amount of node possible', () => {
  // Arrange
  const path = [1, 10, 3, 2, 5, 20];
  const maxDistanceAllowed = 13;
  
  // Act
  const result = getBestPath({path, maxDistanceAllowed});
  
  // Assert
  expect(JSON.stringify(result)).toEqual(JSON.stringify([1, 2, 3, 5]));
});

test('Delivery track should return empty route if given route is undefined or empty ', () => {
  // Arrange
  const path = [];
  const pathUndefined = undefined;
  const maxDistanceAllowed = 13;
  
  // Act
  const result = getBestPath({path, maxDistanceAllowed});
  const resultUndefined = getBestPath({path: pathUndefined, maxDistanceAllowed});
  
  // Assert
  expect(result).toEqual([]);
  expect(resultUndefined).toEqual([]);
});