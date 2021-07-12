const {isAVL} = require('.');

/**
 * This represent a single node on a BST
 */
class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

test('the tree should be balanced', () => {
  // Arrange
  const leftChildNode = new Node(4);
  const rightChildNode = new Node(7);
  const parentNode = new Node(5, leftChildNode, rightChildNode);
  
  // Act
  const result = isAVL(parentNode);
  
  // Assert
  expect(result).toBeTruthy();
});
