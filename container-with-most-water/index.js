/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * Notice that you may not slant the container.
 * @param numbers
 * @returns {number}
 */
function maxArea(numbers) {
  let left = 0
  let right = numbers.length - 1;
  let max = Number.MIN_VALUE;
  
  while (left < right) {
    const minHeight = Math.min(numbers[left], numbers[right]);
    max = Math.max(max, minHeight * (right - left));
    if (numbers[left] < numbers[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return max;
}

module.exports = {
  maxArea
}