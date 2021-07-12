/**
 * Time: O(n^2) - Quadric time
 * https://www.youtube.com/watch?v=xWBP4lzkoyM
 * @param array
 * @returns {*[]}
 */
function sortArray(array = []) {
  for (let stepIndex = 0; stepIndex < array.length - 1; stepIndex++) {
    let minValue = array[stepIndex];
    let minIndex = -1;
    for (let walkIndex = stepIndex + 1; walkIndex < array.length; walkIndex++) {
      const valueStep = array[walkIndex];
      if (valueStep < minValue) {
        minValue = valueStep;
        minIndex = walkIndex;
      }
    }
    if (minIndex > -1 && stepIndex !== minIndex) {
      array = swap(array, stepIndex, minIndex);
    }
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