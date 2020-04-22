const {getTotalSum} = require('.');

const Node = (value) => ({
  value: value || 0,
  leftChild: undefined,
  rightChild: undefined,
});

const getTree = () => {
  const node1 = Node(1);
  const node2 = Node( 2);
  const node4 = Node(4);
  const node4B = Node(4);
  const node5 = Node(5);
  const node7 = Node( 7);
  const node8 = Node(8);
  const node11 = Node( 11);
  const node13 = Node( 13);
  
  node5.leftChild = node4;
  node5.rightChild = node8;
  node4.leftChild = node11;
  node11.leftChild = node7;
  node11.rightChild = node2;
  node8.leftChild = node13;
  node8.rightChild = node4B;
  node4B.rightChild = node1;
  
  return node5;
};

test('path sum should calculate properly the sum of all node sum', () => {
  // Arrange
  const tree = getTree();
  
  // Act
  const totalSum = getTotalSum(tree);
  
  // Assert
  expect(totalSum).toBe(55);
});