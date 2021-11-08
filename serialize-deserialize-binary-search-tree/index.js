class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function serialize(node) {
  return dfs(node);
}

function dfs(node, result = []) {
  // pre-order transverse
  if (node && node.value) {
    result.push(node.value)
  }
  // always go to left first.
  if (node.left) {
    dfs(node.left, result);
  } else {
    result.push(null);
  }
  
  if (node.right) {
    dfs(node.right, result);
  } else {
    result.push(null);
  }
  
  return JSON.stringify(result); // serialize tree
}

function deserialize(text, result = '') {
  const numbers = JSON.parse(text);
  return buildTree(numbers);
}

function buildTree(numbers, index = 0, root) {
  
  const number = numbers[index];
  
  if (number) {
    const node = new Node(number);
    const left = numbers[index + 1];
    if (left) {
      node.left = new Node(left);
      buildTree(numbers, index + 1, node.left);
    }
    const right = numbers[index + 2];
    if (right) {
      node.right = new Node(right)
      buildTree(numbers, index + 2, node.right)
    }
  }
 
  return node;
}

function buildDFS(numbers, root) {

}

module.exports = {
  Node,
  serialize,
  deserialize,
}