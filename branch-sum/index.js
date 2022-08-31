function branchSum(node) {
  return sum(node);
}

function sum(node, total = 0, result = []) {
  if (!node) return;

  total += node.value;

  const isLeafe = !node.left && !node.right;

  if (isLeafe) {
    result.push(total);
  }

  sum(node.left, total, result);
  sum(node.right, total, result);

  return result;
}

module.exports = {
  branchSum
};
