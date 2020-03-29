const {createUnivalNode, isUnivalTree} = require('.');

test('Unival tree', () => {
  const UNIC_VALUE = '1';
  const nodeOne = createUnivalNode({value: UNIC_VALUE});
  const nodeTwoChildOne = createUnivalNode({value: UNIC_VALUE});
  const nodeTwoChildTwo = createUnivalNode({value: UNIC_VALUE});
  const nodeTwo = createUnivalNode({value: UNIC_VALUE, nodes: [nodeTwoChildOne, nodeTwoChildTwo]});
  const mainNode = createUnivalNode({value: UNIC_VALUE, nodes: [nodeOne, nodeTwo]});
  
  const expected = isUnivalTree(mainNode, UNIC_VALUE);
  
  expect(expected).toBeTruthy();
});