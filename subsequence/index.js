/**
 * Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
 */
function isValidSubsequence(array, subsequence) {
  let indexArray = 0;
  let indexSubsequence = 0;

  while (indexArray < array.length && indexSubsequence < subsequence.length) {
    if (array[indexArray] === subsequence[indexSubsequence]) {
      indexSubsequence++;
    }
    indexArray++;
  }

  return subsequence.length === indexSubsequence;
}

module.exports = {
  isValidSubsequence
};
