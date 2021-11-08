/**
 * Time: O(n^2) - Quadric time
 * Explanation: https://www.youtube.com/watch?v=nmhjrI-aW5o
 * @param array
 * @returns {*[]}
 */
function sortArray(array = []) {
  let swapper = false;
  do {
    swapper = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapper = true;
        array = swap(array, i, i + 1);
      }
    }
  } while (swapper)
  return array;
}

function swap(array, originIndex, newIndex) {
  const temp = array[originIndex];
  array[originIndex] = array[newIndex];
  array[newIndex] = temp;
  return array;
}

module.exports = {
  sortArray
}