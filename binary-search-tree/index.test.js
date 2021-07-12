const {existNode} = require('.');

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

test('should be exist', () => {
  // Arrange
  const tree = new Node(
    5, // level 0
    new Node(3, // level 1
      new Node(2)), // level 2
    new Node(6) // level 1
  );
  const target = 6;
  
  // Act
  const result = existNode(tree, target);
  
  // Assert
  expect(result).toBeTruthy();
});

test('should not exist', () => {
  // Arrange
  const tree = new Node(
    5, // level 0
    new Node(3, // level 1
      new Node(2)), // level 2
    new Node(6) // level 1
  );
  const target = 99;
  
  // Act
  const result = existNode(tree, target);
  
  // Assert
  expect(result).toBeFalsy();
});
