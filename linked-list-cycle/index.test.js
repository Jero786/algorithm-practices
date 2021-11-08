const {hasCycle, Node} = require('.');



test('has linked list cycle', () => {
  // Arrange
  const nodeFour = new Node(-4);
  const nodeZero = new Node(0, nodeFour)
  const nodeTwo = new Node(2, nodeZero);
  nodeFour.next = nodeTwo; // <-- create cycle
  const head = new Node(3, nodeTwo)
  
  // Act
  const result = hasCycle(head)

  // Assert
  expect(result).toBeTruthy();
});

test('has linked list cycle', () => {
  // Arrange
  const nodeFour = new Node(-4);
  const nodeZero = new Node(0, nodeFour)
  const nodeTwo = new Node(2, nodeZero);
  const head = new Node(3, nodeTwo)
  
  // Act
  const result = hasCycle(head)
  
  // Assert
  expect(result).toBeFalsy();
});