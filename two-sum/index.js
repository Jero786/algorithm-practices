/**
 * This is a brute force solution, with space 0, but complexity O(n.n) -> O(n2)
 * @param numbers
 * @param target
 * @returns {number[]|*[]}
 */
function getTwoSumBruteForSolution(numbers, target) {
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    const targetNumber = target - number;
    for (let i = 0; i < numbers.length; i++) {
      if (index === i) continue; // we don't want to compare the same number
      if (numbers[i]  === targetNumber) return [index, i];
    }
  }
  return [];
}

/**
 * This is optimized solution, but space takes O(n) rather than 0, and complexity is O(n).
 * @param numbers
 * @param target
 * @returns {this}
 */
function getTwoSum(numbers, target) {
  let values = [];

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    values[number] = index;
    const targetNumber = target - number;
    const indexTargetFound = values[targetNumber];
    if (indexTargetFound !== undefined) {
      return [index, indexTargetFound].sort();
    }
  }
}

module.exports = {
  getTwoSum,
  getTwoSumBruteForSolution
}