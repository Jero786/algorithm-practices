class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @param head
 * @param index
 * @returns {*}
 */
function removeNthFromEnd(head, index) {
  // get the length of the linked list
  const length = getLengthNode(head);
  
  // calculate the targetIndex =  (length - n) - 1 // minus one because we wants to stop before;
  const targetIndex = (length - index) - 1;
  
  // transverse the nodes until x, and then replace the link reference to remove it
  return removeNode(head, targetIndex);
}

function getLengthNode(node, length = 1) {
  if (!node.next) return length;
  
  return getLengthNode(node.next, length + 1);
}

function removeNode(node, targetIndex, index = 0) {
  if (targetIndex === index) {
    node.next = node.next.next;
  } else {
    removeNode(node.next, targetIndex, index + 1);
  }
  return node;
}

module.exports = {
  Node,
  removeNthFromEnd
}
