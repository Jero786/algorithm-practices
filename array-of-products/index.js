/**
 * Write a function that takes in a non-empty array of integers and returns an array of the same length,
 * where each element in the output array is equal to the product of every other number in the input array.
 * In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].
 * Note that you're expected to solve this problem without using division.
 *
 * Sample Input
 * array = [5, 1, 4, 2]
 Sample Output
 [8, 40, 10, 20]
 // 8 is equal to 1 x 4 x 2 (without counting value of index 0)
 // 40 is equal to 5 x 4 x 2
 // 10 is equal to 5 x 1 x 2
 // 20 is equal to 5 x 1 x 4
 */

/**
 * Brute force solution - TC: O(n2), EC: (
 * @param array
 * @returns {[]}
 */
function arrayOfProductsBruteForce(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let value = 1; // remember set 1, not 0
    for (let y = 0; y < array.length; y++) {
      if (y === i) continue;
      
      value *= array[y];
    }
    result.push(value)
  }
  
  return result;
}

function arrayOfProducts(products) {
  const leftProducts = generateLeftProducts(products);
  const rightProducts = generateRightProducts(products);
  return generateProducts(leftProducts, rightProducts);
}

function generateLeftProducts(products) {
  let value = 1;
  let result = [];
  
  for (let i = 0; i < products.length; i++) {
    result[i] = value;
    value *= products[i];
  }
  
  return result;
}
function generateRightProducts(products) {
  let value = 1;
  let result = [];
  
  for (let i = products.length - 1; i > -1; i--) {
    result[i] = value;
    value *= products[i];
  }
  
  return result;
}

function generateProducts(leftProducts, rightProducts) {
  const result = [];
  
  for (let i = 0; i < leftProducts.length; i++) {
    result.push(leftProducts[i] * rightProducts[i]);
  }
  
  return result;
}

module.exports = {
  arrayOfProductsBruteForce,
  arrayOfProducts,
}