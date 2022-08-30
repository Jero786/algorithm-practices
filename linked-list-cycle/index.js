class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let node = head;
  let visitedNodes = new Set();

  while (node) {
    if (visitedNodes.has(node)) {
      return true;
    } else {
      visitedNodes.add(node);
      node = node.next;
    }
  }

  return false;
}

module.exports = {
  Node,
  hasCycle
};
