/**
 * Given an integer array nums, find the contiguous
 * subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 * @param numbers
 * @returns {number}
 */
function maximumSubarray(numbers) {
  if (numbers.length === 1 && numbers[0] < 0) return 0;
  let prevNumber = 1;
  let maxSum = Number.MIN_VALUE;
  for (let i = 0; i < numbers.length; i++) {
   const currentNumber = numbers[i];
   prevNumber = Math.max(currentNumber, prevNumber * currentNumber);
   maxSum = Math.max(prevNumber, maxSum);
  }
  return maxSum;
}

module.exports = {
  maximumSubarray
}