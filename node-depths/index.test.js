const {nodeDepths} = require('.');

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

test('branch sums', () => {
  // Arrange
  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(4);
  root.left.left.left = new BinaryTree(8);
  root.left.left.right = new BinaryTree(9);
  root.left.right = new BinaryTree(5);
  root.right = new BinaryTree(3);
  root.right.left = new BinaryTree(6);
  root.right.right = new BinaryTree(7);
  
  // Act
  const actual = nodeDepths(root);
  
  // Assert
  expect(actual).toEqual(16);
});