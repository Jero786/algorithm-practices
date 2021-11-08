const {isValidBST, Node} = require('.');

test('validate binary tree should be false', () => {
  // Arrange
  const node = new Node(1, new Node(2), new Node(3));
  // Act
  const result = isValidBST(node);
  // Assert
  expect(result).toBeFalsy();
});

test('validate binary tree should be true', () => {
  // Arrange
  const node = new Node(2, new Node(1), new Node(3));
  // Act
  const result = isValidBST(node);
  // Assert
  expect(result).toBeTruthy();
});