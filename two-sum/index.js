function sortAsc() {
  return (a, b) => {
    if (a === b) {
      return 0;
    } else if (a < b) {
      return 1;
    } else {
      return -1;
    }
  };
}

/**
 * This is a brute force solution, with space 0, but complexity O(n.n) -> O(n2)
 * @param numbers
 * @param target
 * @returns {number[]|*[]}
 */
function getTwoSumBruteForSolution(numbers, target) {
  for (let index = 0; index < numbers.length - 1; index++) {
    for (let i = 1; i < numbers.length; i++) {
      if (index === i) continue; // we don't want to compare the same number
      if (numbers[i] + numbers[index] === target)
        return [numbers[i], numbers[index]].sort(sortAsc());
    }
  }
  return [];
}

/**
 * This is optimized solution, but space takes O(n) rather than 0, and complexity is O(n).
 * @param array
 * @param targetSum
 * @returns {this}
 */
function getTwoSum(array, targetSum) {
  const numbersSeen = {};

  for (const number of array) {
    const potentialMatch = targetSum - number;

    if (potentialMatch in numbersSeen) {
      return [potentialMatch, number];
    } else {
      numbersSeen[number] = true;
    }
  }

  return [];
}

module.exports = {
  getTwoSum,
  getTwoSumBruteForSolution
};
