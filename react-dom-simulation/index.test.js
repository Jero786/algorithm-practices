const React = require('react');

const {buildNodes, reactElementToFiberNode, isEverySiblingEqual} = require('./fiber');

/*
 1. Build a react component APP (just remember syntax here)
 2. render:
    2. First-time:
            - Phase: 1
              - Create a Fiber Node tree from scratch from given React Element (APP). (normal tree, to fiber tree), crate each DOM instance needed (stateNode).
                Remember to create a working progress, Parent.stateNode === undefined, which contain a `child` pointer to the App fiber node.
            - Phase: 2 Commit
              - Container.appendChild(fiberNode.getAllStateNodes(WorkingProgressNode.child))
   3. Update-time:
          - Phase: 1 Render-Reconcile
            - Get from Store containers, the previous Fiber node Tree. ('#root', FiberNodeTree)
            - Create a New Fiber Tree from existing Elements (The working progress tree) in the following way:
               - Set flag state: STARGING_WORKING_IN_PROGRESS
               - Compare each existing Fiber node (should container a old element too), with New one.
                  A: The elements nodes are the same, just point the same reference Old fiberNode, to the new WPT.
                  B: The elements nodes are different, create a New FiverNode, and enqueue the changes in that node, and mark as effect.
               - Set flag state: ENDED_WORKING_IN_PROGRESS
          - Phase: 2 Commit
            - Take all effects (which contain each Fiber node with the address in the real DOM) and apply these effect to real DOM in the detached WPT.
            - Point the WPT to as new Child of Parent node. (here it's happening the double buffer)
 3 setState
     - That happens the same as Update-time phase that statement above.
*/
test('should convert React elements to Fiber node', () => {
  // Arrange
  const reactElement = buildTreeOne();
  
  // Act
  const fiberNode = reactElementToFiberNode(reactElement);
  
  // Assert
  const child = fiberNode.child;
  expect(fiberNode).toBeDefined();
  expect(fiberNode.stateNode.type).toEqual('div');
  expect(fiberNode.sibling).toBeUndefined();
  expect(fiberNode.parent).toBeUndefined();
  expect(child.stateNode.props.className).toEqual('parent-node-one');
  expect(child.child.stateNode.props.className).toEqual('list');
  expect(child.child.child.stateNode.props.className).toEqual('child-list');
  expect(child.child.child.sibling.stateNode.props.className).toEqual('child-list');
  expect(child.child.child.sibling.sibling).toBeUndefined();
});

test('should indicate if fiber trees are the same successfully', () => {
  // Arrange
  const treeNodeOriginal = buildTreeOne();
  const treeNodeLatest = buildTreeOne();
  const fiberTreeOne = toFiberNode(treeNodeOriginal);
  const fiberTreeTwo = toFiberNode(treeNodeLatest);
  
  // Act
  const computedDifferences = isEverySiblingEqual(fiberTreeOne, fiberTreeTwo);
  
  // Assert
  expect(computedDifferences).toBeTruthy();
});

test('should indicate indicate that trees are different', () => {
  // Arrange
  const treeNodeOriginal = buildTreeOne();
  const treeNodeLatest = buildTreeTwo();
  const fiberTreeOne = toFiberNode(treeNodeOriginal);
  const fiberTreeTwo = toFiberNode(treeNodeLatest);
  
  // Act
  const computedDifferences = isEverySiblingEqual(fiberTreeOne, fiberTreeTwo);
  
  // Assert
  expect(computedDifferences).toBeFalsy();
});

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
  1. [DONE] Build a fiber nodes with some tree structure, from a existing HTML or mock.
  2. [DONE] Compare both trees on BFS way and compute their differences in a new Tree.
  3. Apply these differences into the real DOM.
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


/*
test('should return fiber nodes build', () => {
  const RootNode = buildNodes();
  console.log(`Tree ${RootNode}`);
});
*/

const toEl = React.createElement;
function buildTreeTwo() {
  const childOneEl = toEl('li', {className: 'child-list', key: 'key-1-23'});
  const childTwoEl = toEl('li', {className: 'child-list', key: 'key-2-45'});
  
  const listEl = toEl(
    'ul',
    {className: 'list'},
    [childOneEl, childTwoEl]
  );
  return toEl(
    'div',
    {className: 'parent-node-two'},
    [listEl]
  );
}
function buildTreeOne() {
  const childOneEl = toEl('li', {className: 'child-list', key: 'key-1-node-1'}, 'node 1');
  const childTwoEl = toEl('li', {className: 'child-list', key: 'key-2-node-2'}, 'node 2');
  
  const listEl = toEl(
    'ul',
    {className: 'list', key:'list-1'},
    [childOneEl, childTwoEl]
  );
  return toEl(
    'span',
    {className: 'parent-node-one', key: 'parent-1'},
    [listEl]
  );
}