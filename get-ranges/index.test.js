const {getRange} = require('.');

test('given an array return the fist and last indeces of an element in a sorted array', () => {
  const array = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];
  const target = 9;
  
  const [indexOne, indexTwo] = getRange(array, 9);
  
  expect(indexOne).toEqual(6);
  expect(indexTwo).toEqual(8);
});