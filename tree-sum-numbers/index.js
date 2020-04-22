function getTotalSum(tree, result = []) {
  result.push(tree.value);
  
  if (tree.leftChild) {
    getTotalSum(tree.leftChild, result);
  }
  
  if (tree.rightChild) {
    getTotalSum(tree.rightChild, result);
  }
  
  return result.reduce((total, number) => total += number, 0);
}

module.exports = {
  getTotalSum
};