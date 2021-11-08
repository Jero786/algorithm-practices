class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function invertBinaryTree(node) {
  if (node === null || node.length === 0) return node;
  
  node = swapChilds(node);
  
  if (node.left) {
    invertBinaryTree(node.left);
  }
  
  if (node.right) {
    invertBinaryTree(node.right);
  }
  
  return node;
}

function swapChilds(node) {
  if (node && node.left && node.right) {
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
  return node;
}

module.exports = {
  invertBinaryTree,
  Node
}