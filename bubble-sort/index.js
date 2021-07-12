/**
 * Time: O(n^2) - Quadric time
 * Explanation: https://www.youtube.com/watch?v=nmhjrI-aW5o
 * @param array
 * @returns {*[]}
 */
function sortArray(array = []) {
  const length = array.length;
  let maxSteps = length - 1;
  
  for (let stepIndex = 0; stepIndex < maxSteps; stepIndex++) {
    for (let walkIndex = 0; walkIndex < maxSteps; walkIndex++) {
      if (array[walkIndex] > array[walkIndex + 1]) {
        array = swap(array, walkIndex, walkIndex + 1);
      }
    }
    maxSteps--;
    stepIndex = 0;
  }
  
  return array;
}

function swap(array, indexLeft, indexRight) {
  const valueLeft = array[indexLeft];
  array[indexLeft] = array[indexRight]
  array[indexRight] = valueLeft;
  return array;
}

module.exports = {
  sortArray
}