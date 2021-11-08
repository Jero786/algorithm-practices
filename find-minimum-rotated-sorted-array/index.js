/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
 * [4,5,6,7,0,1,2] if it was rotated 4 times.
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 *
 * Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @returns {number}
 */
function getMinimumRotatedSortedArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let firstShifted = -1;
  
  while (left < right) {
    const pivotIndex = Math.floor((left + right) / 2);
    if (numbers[pivotIndex] > numbers[right])  {
      left = pivotIndex + 1;
    } else {
      right = pivotIndex - 1;
    }
  }
  
  firstShifted = left;
  
  // comparing first item of both subgroups
  if (numbers[0] < numbers[firstShifted]) {
    return numbers[0]; // won first group
  } else {
    return numbers[firstShifted]; // won second group
  }
}

module.exports = {
  getMinimumRotatedSortedArray
}