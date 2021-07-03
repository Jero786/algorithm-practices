/**
 * O(N) solution.
 * @param number
 * @returns {number}
 */
function fibonacci(number) {
  let nextValue = 1;
  let result = 0;
  let temp = 0;
  
  while(number >= 0) {
    temp = nextValue;
    nextValue = nextValue + result;
    result = temp;
    number--;
  }
  
  return result;
}

/**
 * (2^N)
 * @param number
 * @returns {number}
 */
function fibonacciRecursiveWay(number) {
  if (number <= 1) return 1;
  
 return fibonacci(number - 1) + fibonacci(number - 2);
}

module.exports = {
  fibonacci,
  fibonacciRecursiveWay
};