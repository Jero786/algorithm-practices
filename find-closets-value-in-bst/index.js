class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function findClosestValueInBst(root, target) {
  return transverseNode(root, target, root.value);
}

function transverseNode(node, target, closest) {
  if (node === null) return closest;
  
  if (Math.abs(target - closest) > Math.abs(target - node.value)) {
    closest = node.value;
  }
  
  if (node.value === target) return node.value;
  if (target > node.value) {
    return transverseNode(node.right, target, closest);
  } else {
    return transverseNode(node.left, target, closest);
  }
}

module.exports = {
  BST,
  findClosestValueInBst
}