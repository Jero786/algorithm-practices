function searchInRotatedSortedArray(nums, target) {
  if (!nums || nums.length === 0) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);

    if (nums[pivot] === target) return pivot;

    // se search the original start index of the rotated array.
    if (nums[pivot] > nums[right]) {
      left = pivot + 1;
    } else {
      break;
    }
  }

  let start = left;
  left = 0;
  right = nums.length - 1;

  // we should decide in which side our target are (left or right)
  if (target >= nums[start]) {
    left = start;
  } else {
    right = start;
  }

  // Do a regular binary search
  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);

    if (nums[pivot] === target) {
      return pivot;
    } else if (nums[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return -1;
}

module.exports = {
  searchInRotatedSortedArray
};
