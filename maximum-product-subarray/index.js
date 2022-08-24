/**
 * Given an integer array nums, find the contiguous
 * subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 * @param numbers
 * @returns {number}
 */
function maximumSubarray(numbers) {
  if (numbers.length === 1) return numbers[0];

  let minProducts = [numbers[0]];
  let maxProducts = [numbers[0]];
  let maxProduct = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const num = numbers[i];
    maxProducts[i] = Math.max(
      num,
      num * minProducts[i - 1],
      num * maxProducts[i - 1]
    );

    minProducts[i] = Math.min(
      num,
      num * minProducts[i - 1],
      num * maxProducts[i - 1]
    );

    maxProduct = Math.max(maxProduct, maxProducts[i]);
  }

  return maxProduct;
}

module.exports = {
  maximumSubarray
};
