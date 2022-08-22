/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * https://leetcode.com/problems/3sum/
 * @param nums
 * @param target
 * @returns {unknown[]|*[]}
 */
// TC: O(n^2) EC: O(N)
function getAllTriplets(nums, target) {
  let current = 0;
  let low = 1;
  let high = nums.length - 1;
  let result = {};

  nums.sort((a, b) => a - b); // O(nLog(n)) /-> Quick Sort/Mega Sort

  if (!nums || nums.length < 2) return [];

  while (current < nums.length - 2) {
    if (low >= high) {
      current++;
      low = current + 1;
      high = nums.length - 1;
    }

    let possibleTarget = nums[current] + nums[low] + nums[high];
    if (possibleTarget === target) {
      result[`${nums[current]}-${nums[low]}-${nums[high]}`] = [
        nums[current],
        nums[low],
        nums[high]
      ];
      low++;
      high--;
    } else if (possibleTarget > target) {
      high--;
    } else {
      low++;
    }
  }

  return Object.values(result);
}

// TC: O(n^3) EC: O(N)
function getAllTripletsBruteForce(nums, target) {
  let result = {};
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const possibleTarget = nums[i] + nums[j] + nums[k];
        if (possibleTarget === target) {
          result[`${nums[i]}-${nums[j]}-${nums[k]}`] = [
            nums[i],
            nums[j],
            nums[k]
          ];
        }
      }
    }
  }

  return Object.values(result);
}

/**
 *
 * TC: O(n2)
 * EC: O(n)
 * @returns
 */
const getAllTripletsWhileFor = (nums, target) => {
  const sortedNums = nums.sort((a, b) => a - b); // n(log n)  quicksort, heapsort, meagasort.
  let result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] >= target) continue; // it's higher than needed.

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const possibleSum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (possibleSum === target) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;
      } else if (possibleSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};

module.exports = {
  getAllTriplets,
  getAllTripletsBruteForce,
  getAllTripletsWhileFor
};
