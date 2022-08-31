const { branchSum } = require('.');

const Node = (value, left, right) => ({ value, left, right });

describe('branch sum', () => {
  it('case one', () => {
    const tree = Node(
      1,
      Node(2, Node(4, Node(8), Node(9)), Node(5, Node(10))),
      Node(3, Node(6), Node(7))
    );

    const result = branchSum(tree);

    expect(result).toEqual([15, 16, 18, 10, 11]);
  });
});
