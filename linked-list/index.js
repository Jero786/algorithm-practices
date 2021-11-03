/**
 * This node represent a Linked List Node.
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
  
  size() {
    return this.next
      ? 1 + this.next.size()
      : 1; // enter here the last item (tail)
  }
  
  add(node) {
    if (this.next) {
      this.next.add(node);
    } else {
      this.next = node;
    }
  }
  
  static reverse(head) {
    let prev;
    let next;
    let current = head;
    
    while(!!current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    
    head = prev;
    
    return head;
  }
  
}

module.exports = {
  Node
}