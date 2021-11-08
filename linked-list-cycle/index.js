class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
 
  let slow = head;
  let fast = head.next;
  
  while(slow !== fast) {
  
    if (fast === undefined || fast.next === undefined) return false;
  
    fast = fast.next.next;
    slow = slow.next;
  }
  
  return true;
}

module.exports = {
  Node,
  hasCycle
}