function nodeDepths(node, depth = 0) {
  if (!node) return 0;
  
  return depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1);
}

module.exports = {
  nodeDepths
}