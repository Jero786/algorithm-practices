class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function removeDuplicate(node) {
  let currentNode = node;
  while (currentNode) {
    let nextDistinctNode = currentNode.next;
    while (nextDistinctNode != null && (nextDistinctNode.value === currentNode.value)) {
      nextDistinctNode = nextDistinctNode.next;
    }
    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }
  return node;
}

module.exports = {
  Node,
  removeDuplicate
}