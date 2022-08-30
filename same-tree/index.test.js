const { isSameTree } = require('.');

const Node = (value, left, right) => ({value, left, right})

describe('same tree', () => {
  it('same tree', () => {
    const treeOne = Node(1, Node(2), Node(3));
    const treeTwo = Node(1, Node(2), Node(3));

    const result = isSameTree(treeOne, treeTwo);

    expect(result).toBeTruthy();
  });
});
