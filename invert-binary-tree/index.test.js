const {invertBinaryTree, Node} = require('.');

test('invert binary tree', () => {
  // Arrange
  const node = new Node(4,
    new Node(2, new Node(1), new Node(3)),
    new Node(7, new Node(6), new Node(9))
  );
  // Act
  const result = invertBinaryTree(node);
  // Assert
  expect(result.value).toEqual(4);
  expect(result.left.value).toEqual(7);
  expect(result.right.value).toEqual(2);
  expect(result.left.left.value).toEqual(9);
  expect(result.left.right.value).toEqual(6);
  expect(result.right.left.value).toEqual(3);
  expect(result.right.right.value).toEqual(1);
});