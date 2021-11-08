function searchInRotatedSortedArray(numbers, target) {
  
  // find start of shifting
  let left = 0;
  let right = numbers.length - 1;
  
  while(left < right) {
    const pivotIndex = Math.floor(left + (right - left) / 2);
    if (numbers[pivotIndex] > numbers[right]) {
      left = pivotIndex + 1;
    } else {
      right = pivotIndex - 1;
    }
  }
  
  let shiftIndex = left;
  left = 0;
  right = numbers.length - 1;
  
  if (numbers[shiftIndex] >= target
    && target <= numbers[right]) {
    left = shiftIndex;
  } else {
    right = shiftIndex;
  }
  
  let targetIndex;
  while(left <= right) {
    targetIndex = Math.floor(left + (right - left) / 2);
    
    if (numbers[targetIndex] === target) return targetIndex;
    
    if (numbers[targetIndex] < target) {
       left = targetIndex + 1;
    } else {
       right = targetIndex - 1
    }
  }
  
  return targetIndex;
}

module.exports = {
  searchInRotatedSortedArray
}