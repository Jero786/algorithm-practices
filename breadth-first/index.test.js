const {Node} = require('.');

test('given tree, result all node values transversing the tree with breadh-first search', () => {
  // Arrange
  const graph = new Node('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');
  
  // Act
  const result = graph.breadthFirstSearch([]);
  
  // Assert
  expect(result).toEqual(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]);
});