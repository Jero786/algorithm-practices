class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let node = head;

  while (node) {
    if (node.seen) {
      return node;
    } else {
      node.seen = true;
    }
    node = node.next;
  }

  return false;
}

module.exports = {
  Node,
  hasCycle
};
