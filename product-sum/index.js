function getSum(numbers) {
  let total = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    const numberOrArray = numbers[i];
    if (Array.isArray(numberOrArray)) {
      total += getTotalFromArray(numberOrArray);
    } else {
      total += numberOrArray;
    }
  }
  
  return total;
}

function getTotalFromArray(array, deepLevel = 2,  total = []) {
  let numberFromLevel = [];
  
  for (let i = 0; i < array.length; i++) {
    const numberOrArray = array[i];
    if (Array.isArray(numberOrArray)) {
      numberFromLevel.push(getTotalFromArray(numberOrArray, deepLevel + 1, total));
    } else {
      numberFromLevel.push(numberOrArray)
    }
  }
  
  return numberFromLevel.reduce((total, num) => total + num, 0) * deepLevel;
}

module.exports = {
  getSum
}