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
  if (!node) return closest;

  const prevDistance = Math.abs(target - closest);
  const currentDistance = Math.abs(target - node.value);

  if (prevDistance > currentDistance) {
    // means the current node is closer than previouse
    closest = node.value;
  }

  if (node.value === target) node.value;

  if (target > node.value) {
    return transverseNode(node.right, target, closest);
  } else {
    return transverseNode(node.left, target, closest);
  }
}

module.exports = {
  BST,
  findClosestValueInBst
};
