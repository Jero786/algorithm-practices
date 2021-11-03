/**
 * Time: O(n^2) - Quadric time
 * Explanation: https://www.youtube.com/watch?v=nmhjrI-aW5o
 * @param array
 * @returns {*[]}
 */
function sortArray(array = []) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return array;
}

module.exports = {
  sortArray
}