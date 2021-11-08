class Node {
  constructor(value, left, right) {
    this.val = value;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(node, result = []) {
  if (node === null) {
    result.push(true);
  } else {
    if (node.left) {
      result.push(node.val > node.left.val);
      isValidBST(node.left, result);
    } else if (node.right) {
      result.push(node.val < node.right.val);
      isValidBST(node.right, result);
    }
  }
  
  return result.every(value => value);
}


module.exports = {
  isValidBST,
  Node
}