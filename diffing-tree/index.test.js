/*const {createNode, getMinDifferences} = require('.');*/
const {buildNodes} = require('./fiber');
/*

function getTwoTreesWithSingleChildDifference({differentSingleChildNode}) {
  const nodeChildOne = createNode();
  const nodeChildTwo = createNode();
  const nodeChildOneParentTwo = createNode();
  const nodeChildTwoParentTwo = createNode(differentSingleChildNode);
  const nodeParent = createNode('parent', nodeChildOne, nodeChildTwo);
  const nodeParentTwo = createNode('parent', nodeChildOneParentTwo, nodeChildTwoParentTwo);
  return [nodeParent, nodeParentTwo];
}
*/

// Overview steps:

/*
  1. Build a fiber nodes with some tree structure, from a existing HTML or mock.
  2. Simulate some fiber node, with a few differences than the step above.
  3. Compare both trees on BFS way and compute their differences in a new Tree.
  4. Apply these differences into the real DOM.
 */
/*
test('should return the min diff between two trees when different child node name', () => {
  // Arrange
  const [nodeOne, nodeTwo] = getTwoTreesWithSingleChildDifference({differentSingleChildNode: 'child-different'});
  
  // Act
  const minDifferences = getMinDifferences({nodeOne, nodeTwo});
  
  // Assert
  expect(minDifferences.props.children.length).toEqual(1);
  expect(minDifferences.props.children[0].type).toEqual('child-different');
});
*/

test('should return fiber nodes build', () => {
  const RootNode = buildNodes();
  console.log(`Treee ${RootNode}`);
  
});
