/**
 *
 * Return is given Binary Search tree is valid or not, based on left value should be lower than right value.
 *
 *  Time:  O(N) if are balanced (AVL) should be O(nlog(n))
 *  Space: O(N)
 *
 * @param node
 * @param target
 * @returns {boolean}
 */
function existNode(
  node,
  target
) {
  if (!node) return;
  
  if (node.value === target) {
    return true;
  }
  if (target > node.value) {
    return existNode(node.right, target);
  } else {
    return existNode(node.left, target);
  }
}

module.exports = {
  isBalanced
};