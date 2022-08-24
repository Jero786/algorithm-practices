/*
Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.
If the input array is empty, the function should return an empty array.

Sample Input
array = [1, 2, 3]

Sample Output
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 */
function getAllPermutations(numbers) {
 const permutations = [] ;
  
 permutationsHelper(numbers, [], permutations);
 
 return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

module.exports = {
  getAllPermutations
}