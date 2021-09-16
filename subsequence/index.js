
/**
 * Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
 */
function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;
  
  while(arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
    arrayIndex++;
  }
  
  return sequence.length === sequenceIndex;
}

module.exports = {
  isValidSubsequence,
}