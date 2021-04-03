const {isValidBST} = require('.');

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

/**
 *
 * An example of Valid BST:
 *
 *        (5)
 *       /   \
 *     (4)   (7)
 */
test('BST should be true', () => {
  // Arrange
  const leftChildNode = new Node(4);
  const rightChildNode = new Node(7);
  const parentNode = new Node(5, leftChildNode, rightChildNode);
  
  // Act
  const result = isValidBST(parentNode);
  
  // Assert
  expect(result).toBeTruthy();
});

/**
 *
 * An example of Valid BST:
 *
 *        (5)
 *       /   \
 *     (4)   (7)
 *          /   \
 *        (6)   (8)
 */
test('BST should be true with deeper tree', () => {
  // Arrange
  const leftChildNode = new Node(4);
  const rightChildNode = new Node(7, new Node(6), new Node(8));
  const parentNode = new Node(5, leftChildNode, rightChildNode);
  
  // Act
  const result = isValidBST(parentNode);
  
  // Assert
  expect(result).toBeTruthy();
});

/**
 *
 * An example of in Valid BST:
 *
 *        (5)
 *       /   \
 *     (7)   (4)
 */
test('BST should be false', () => {
  // Arrange
  const leftChildNode = new Node(7);
  const rightChildNode = new Node(4);
  const parentNode = new Node(5, leftChildNode, rightChildNode);
  
  // Act
  const result = isValidBST(parentNode);
  
  // Assert
  expect(result).toBeFalsy();
});
