/**
 *
 * Return is given Binary Search tree is valid or not, based on left value should be lower than right value.
 *
 *  Time:  O(N)
 *  Space: O(N)
 *
 * @param node
 * @param low
 * @param high
 * @returns {boolean}
 */
function isValidBST(
  node,
  low = Number.MIN_VALUE,
  high = Number.MAX_VALUE
) {
  
  if (!node) return true;
  
  const value = node.value;
  
  return (
    value > low &&
    value < high &&
    isValidBST(node.left, low, value) &&
    isValidBST(node.right, value, high)
  )
}

module.exports = {
  isValidBST
};