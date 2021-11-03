
/**
 * @param array
 * @param target
 * @returns {boolean}
 */
function search(
  array,
  target,
) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  const pivotIndex = getPivotIndex(minIndex, maxIndex);
  return binarySearch(array, target, pivotIndex, minIndex, maxIndex);
}

function binarySearch (array, target, pivotIndex, minIndex, maxIndex) {
  if (target === array[pivotIndex]) {
    return true;
  }
  
  if (minIndex > maxIndex) return false;
  
  if (array[pivotIndex] < target) {
    minIndex = pivotIndex + 1;
  } else {
    maxIndex = pivotIndex - 1;
  }
  
  const newPivotIndex = getPivotIndex(minIndex, maxIndex);
  
  return binarySearch(array, target, newPivotIndex, minIndex, maxIndex);
}

function getPivotIndex(minIndex, maxIndex) {
  return Math.floor((minIndex + maxIndex) / 2);
}

module.exports = {
  search
};