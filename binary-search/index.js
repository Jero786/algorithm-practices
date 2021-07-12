/**
 * @param array
 * @param target
 * @returns {boolean}
 */
function search(
  array,
  target
) {
  const pivot = getPivot(0, array.length);
  return innerSearch(array, 0, array.length, target, pivot);
}

function innerSearch(array, lowIndex, highIndex, target, pivot) {

  const value = array[pivot];
  
  if (value === target)  {
    return true;
  }
  
  if (lowIndex > highIndex) {
    return false;
  }
  
  if (target > pivot) {
    lowIndex = pivot + 1;
  } else {
    highIndex = pivot - 1;
  }
  
  const newPivot = getPivot(lowIndex, highIndex);
  
  return innerSearch(array, lowIndex, highIndex, target, newPivot);
}

function getPivot(min, max) {
  return Math.floor((min + max) / 2);
}

module.exports = {
  search
};