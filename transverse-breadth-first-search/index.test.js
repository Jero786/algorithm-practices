const { transverseBFS } = require('.');

const Node = (value, childrens = []) => ({ value, childrens });

describe('Transverse BFS', () => {
  it('of three levels', () => {
    const head = Node('A', [
      Node('B', [Node('E', [Node('F'), Node('G')])]),
      Node('C'),
      Node('D')
    ]);

    const result = transverseBFS(head);

    expect(result).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  });
});
