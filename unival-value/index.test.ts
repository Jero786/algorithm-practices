interface UnivalNode {
    value: string,
    hasChildren: () => boolean,
    nodes: UnivalNode[],
}

const createUnivalNode = ({value, nodes = []}) => ({
    nodes,
    value,
    hasChildren: () => nodes && nodes.length > 0
});

function isUnivalTree(node: UnivalNode, univalValue: string, resultNodes = []) {

    if (node.hasChildren()) {
        for(const nodeChild of node.nodes) {
            return isUnivalTree(nodeChild, univalValue, resultNodes);
        }
    } else {
        resultNodes.push(node.value === univalValue);
    }

    return resultNodes.every(value => value);
}

test('Unival tree', () => {
    const UNIC_VALUE = '1';
    const nodeOne = createUnivalNode({value: UNIC_VALUE});
    const nodeTwoChildOne = createUnivalNode({value: UNIC_VALUE});
    const nodeTwoChildTwo = createUnivalNode({value: UNIC_VALUE});
    const nodeTwo = createUnivalNode({value: UNIC_VALUE, nodes: [nodeTwoChildOne, nodeTwoChildTwo]});
    const mainNode = createUnivalNode({value: UNIC_VALUE, nodes:[nodeOne, nodeTwo]});

    const expected = isUnivalTree(mainNode, UNIC_VALUE);

    expect(expected).toBeTruthy();
});