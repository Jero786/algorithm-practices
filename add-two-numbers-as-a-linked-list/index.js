class LinkedNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Recursion tasks limit space
// Space complexity with recursion the recursion increase space because
// create a new function stack for each iteration.
// Helper function for recursion may help us to define initial variable,
// in order to initial parameter not be a mess.

function addTwoNumbers(nodeOne, nodeTwo) {
  return addTwoNumbersHelper(nodeOne, nodeTwo, 0);
}

function addTwoNumbersHelper(nodeOne, nodeTwo, carry) {
  const currentValue = nodeOne.value + nodeTwo.value + carry;
  const newCarry = Math.floor(currentValue / 10);
  const newNode = new LinkedNode(Math.floor(currentValue % 10))
 
  if (nodeOne.next || nodeTwo.next)  {
    if (!nodeOne.next) {
      nodeOne.next = new LinkedNode(0);
    }
    
    if (!nodeTwo.next) {
      nodeTwo.next = new LinkedNode(0);
    }
    
    newNode.next = addTwoNumbersHelper(nodeOne.next, nodeTwo.next, newCarry);
  }
  
  return newNode;
}

module.exports = {
  addTwoNumbers,
  LinkedNode
}