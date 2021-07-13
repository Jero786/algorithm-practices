/**
 *
 * Return is given target exist in given Binary Search tree.
 *
 *  Time:  If BST are balanced (AVL) should be O(nlog(n)), otherwise could be O(n)
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