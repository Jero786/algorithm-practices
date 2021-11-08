/**
 * Given an integer array nums, find the contiguous
 * subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 * @param numbers
 * @returns {number}
 */
function maximumSubarray(numbers) {
  let prevNumber = numbers[0];
  let maxSum = Number.MIN_VALUE;
  for (let i = 0; i < numbers.length; i++) {
   const currentNumber = numbers[i];
   prevNumber = Math.max(currentNumber, prevNumber + currentNumber);
   maxSum = Math.max(prevNumber, maxSum);
  }
  return maxSum;
}

module.exports = {
  maximumSubarray
}