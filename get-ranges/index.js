/**
 * Given an array, return the two index that we found given target number.
 * @param array
 * @param target
 * @returns {this}
 */
function getRange(array, target) {
  return [
    binarySearch(array, target, 1), // O(log(n))
    binarySearch(array, target, 2), // O(log(n))
  ].sort() // O(log(n))
}

/**
 * The binary search algorithm as a O(log(n)) time complexity.
 * @param array
 * @param target
 * @param matchCountExpected
 * @param lowIndex
 * @param highIndex
 * @param pivotValue
 * @param targetCount
 * @returns {number}
 */
function binarySearch(array, target, matchCountExpected = 0, lowIndex, highIndex, pivotValue = -1, targetCount = 0) {
  
  if (pivotValue === -1) {
    lowIndex = 0;
    highIndex = array.length;
    pivotValue = array[Math.ceil(highIndex / 2)];
    return binarySearch(array, target, matchCountExpected, lowIndex, highIndex, pivotValue, targetCount);
  }
  
  if (lowIndex > highIndex) {
    return -1;
  }
  
  if (array[pivotValue] === target) {
    targetCount++;
    if (matchCountExpected === targetCount) {
      return pivotValue;
    }
    // continue finding the next same target in the array.
  }
  
  if (target > array[pivotValue]) {
    lowIndex = pivotValue + 1;
  } else {
    highIndex = pivotValue - 1;
  }
  
  pivotValue = lowIndex + Math.ceil((highIndex - lowIndex) / 2);
  
  return  binarySearch(array, target, matchCountExpected,  lowIndex, highIndex,  pivotValue, targetCount);
}


module.exports = {
  getRange
}