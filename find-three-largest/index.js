function findThreeLargest(numbers) {
  if (numbers === null || numbers.length === 0) return;
  
  let low;
  let medium;
  let high;
  
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (high === undefined || number > high) {
      low = medium;
      medium = high;
      high = number
    } else if (medium === undefined || number > medium) {
      low = medium;
      medium = number;
    } else if (low === undefined || number > low) {
      low = number;
    }
  }
  
  return [low, medium, high];
}


function findThreeLargestShiftingArray(numbers) {
  if (numbers === null || numbers.length === 0) return;
  
  let result = [, ,];
  
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (!result[2] || number > result[2]) {
      result = shiftToLeft(result, 2, number);
    } else if (!result[1] || number > result[1]) {
      result = shiftToLeft(result, 1, number);
    } else if (!result[0] || number > result[0]) {
      result = shiftToLeft(result, 0, number);
    }
  }
  
  return result;
}

function shiftToLeft(numbers, startIndex, newNumber) {
  for (let i = 0; i <= startIndex; i++) {
    if (startIndex === i) {
      numbers[i] = newNumber;
    } else {
      numbers[i] = numbers[i + 1];
    }
  }
  return numbers;
}


module.exports = {
  findThreeLargest,
  findThreeLargestShiftingArray,
}