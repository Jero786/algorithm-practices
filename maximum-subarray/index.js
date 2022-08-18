/**
 * Given an integer array nums, find the contiguous
 * subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 *
 * Resolved using Dynamic programming by Kadane's Algorithm.
 *
 * Formula:
 * We need to use two variables, `maxEndingHere` & `maxSoFar`
 *
 * We need transverse all the array and ask each number:
 *  1) Get the gratest sub array between the current single value ([currentValue]) or the sum of `currentValue` and the previouse sum value (maxEndingHere).
 *  2) Get the maximum between the last maximun or the last `maxEndingHere`.
 *
 * TC: O(n) where N is the length of the array.
 * SC: O(1) we only have two variables.
 *
 * @param numbers
 * @returns {number}
 */
function maximumSubarray(numbers) {
  let maxEndingHere = numbers[0];
  let maxSoFar = numbers[0];

  for (const currentNumber of numbers) {
    maxEndingHere = Math.max(currentNumber, currentNumber + maxEndingHere);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

module.exports = {
  maximumSubarray
};
