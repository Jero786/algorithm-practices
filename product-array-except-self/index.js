/**
 * TC: 0(n2)
 * SC: O(n)
 */
const getProductArrayExceptSelfBruteForce = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    let value = 1;
    for (let y = 0; y < numbers.length; y++) {
      if (y === i) continue;

      value *= numbers[y];
    }
    result.push(value);
  }

  return result;
};

const calculateLeftArray = (numbers) => {
  let value = 1;
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result[i] = value;
    value *= numbers[i];
  }

  return result;
};

const calculateRightArray = (numbers) => {
  let value = 1;
  let result = [];

  for (let i = numbers.length - 1; i > -1; i--) {
    result[i] = value;
    value *= numbers[i];
  }
  return result;
};

/**
 * TC: O(N)
 * SC: O(N) 
 */
const getProductArrayExceptSelf = (numbers) => {
  let result = [];
  const leftArray = calculateLeftArray(numbers);
  const rightArray = calculateRightArray(numbers);

  for (let i = 0; i < numbers.length; i++) {
    result[i] = leftArray[i] * rightArray[i];
  }
  return result;
};

module.exports = {
  getProductArrayExceptSelfBruteForce,
  getProductArrayExceptSelf
};
