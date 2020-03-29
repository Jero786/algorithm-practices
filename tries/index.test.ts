/**
 *      ANALIA
 *      ANA
 *      ANTES
 *      AHORA
 *
 *      A
 *    H   N
 *   O    T   A*
 *  R     E     L
 * A*    S*       I
 *                  A*
 */

interface TrieNode {
    nodes: TrieNode[]
    isEnd: boolean,
    word?: string
    text?: string,
}

function buildTrie<TrieNode>(dictionary: string[]) {
    let parentNode = {nodes: [], isEnd: false, word: undefined};
    for (const word of dictionary) {
        buildTrieNode({word, node: parentNode});
    }
    return parentNode;
}

function buildTrieNode<TreeNode>({word, node, index = 0}) {
    if (index >= word.length) {
        return node;
    }
    index++;
    const textTarget = word.substring(0, index);
    const isParentNode = node.text === undefined;

    let existingNode;
    if (isParentNode) {
        existingNode = findNode(node, textTarget);
        if (existingNode) {
            return buildTrieNode({word, node: existingNode, index});
        }
    } else if (node.text === textTarget) {
        const nextNodeTextTarget = word.substring(0, index + 1);
        const existingChildNode = findNode(node, nextNodeTextTarget);
        if (existingChildNode) {
            buildTrieNode({word, node: existingChildNode, index});
        } else {
            const newChildNode = createNode({
                isEnd: word.length === nextNodeTextTarget.length,
                text: nextNodeTextTarget
            });
            node.nodes.push(newChildNode);
            buildTrieNode({word, node: newChildNode, index});
        }
    }

    const newChildNode = createNode({isEnd: word.length === textTarget.length, text: textTarget});
    node.nodes.push(newChildNode);
    buildTrieNode({word, node: newChildNode, index});
}

function findNode(node, textTarget) {
    if (node && node.nodes && node.nodes.length > 0) {
        return node.nodes.find(node => node.text === textTarget);
    }
}

const createNode = ({isEnd = false, nodes = [], text}) => <TrieNode>({
    isEnd,
    nodes,
    text
});

function findMatchesOnTries(node, textMatcher) {
    const result = getMatchers(node, textMatcher);
    return result;
}

function getMatchers(node: TrieNode, text, results = [], index = 1) {
    if (index >= text.length) {
        const childNode = findNode(node, text);
        return getAllChildNodes(childNode, results);
    }
    const matcherText = text.substring(0, index);
    const filterNodes = node.nodes.filter(node => node.text === matcherText);

    if (filterNodes && filterNodes.length) {
        const filterLeafNode = filterNodes.filter(node => node.isEnd === true);
        if (filterLeafNode && filterLeafNode.length > 0) {
            const dictionary = filterNodes.map(node => node.text);
            results = results.concat(dictionary)
        } else {
            index++;
            for (const filterNode of filterNodes) {
                getMatchers(filterNode, text, results, index);
            }
        }
    }
    return results;
}

function getAllChildNodes(node:TrieNode, results) {
    if (node.isEnd) {
        results.push(node.text);
    }
    for (const childNode of node.nodes) {
        getAllChildNodes(childNode, results);
    }
    return results;
}

function isLeaf(node:TrieNode) {
    return node.isEnd;
}

interface DefaultBuildTriedNodeProps {
    word: string,
    node: TrieNode
}

test('Tries build', () => {
    // Arrange
    const dictionary = ['ana', 'bueno', 'arbol'];

    // Act
    const node: TrieNode = buildTrie(dictionary);

    // Assert
    const aNodes = node.nodes.filter(n => n.text === 'a');
    const aChildNodes = aNodes[0].nodes;
    const bNodes = node.nodes.filter(n => n.text === 'b');
    expect(node.text).toBeUndefined();
    expect(node.nodes.length).toEqual(2);
    expect(aNodes.length).toEqual(1);
    expect(bNodes.length).toEqual(1);
    expect(aChildNodes.length).toEqual(2);
    expect(aChildNodes.filter(n => n.text === 'an').length).toEqual(1);
    expect(aChildNodes.filter(n => n.text === 'ar').length).toEqual(1);
    expect(aChildNodes.filter(n => n.text === 'an')[0].nodes[0].text === 'ana').toBeTruthy();
    expect(aChildNodes.filter(n => n.text === 'an')[0].nodes[0].isEnd).toBeTruthy();
});

test('Tries matcher with single letter', () => {
    // Arrange
    const dictionary = ['ana', 'bueno', 'arbol'];
    const node: TrieNode = buildTrie(dictionary);

    // Act
    const suggested = findMatchesOnTries(node, 'a');

    // Assert
    expect(suggested.length).toEqual(2);
    expect(suggested.indexOf('ana') > -1).toBeTruthy();
    expect(suggested.indexOf('arbol') > -1).toBeTruthy();
    expect(suggested.indexOf('bueno') === -1).toBeTruthy();
});

test('Tries matcher with more than a single letter', () => {
    // Arrange
    const dictionary = ['ana', 'brinco', 'buenudo', 'brisa'];
    const node: TrieNode = buildTrie(dictionary);

    // Act
    const suggested = findMatchesOnTries(node, 'bri');

    // Assert
    expect(suggested.length).toEqual(2);
    expect(suggested.indexOf('brinco') > -1).toBeTruthy();
    expect(suggested.indexOf('brisa') > -1).toBeTruthy();
    expect(suggested.indexOf('ana') === -1).toBeTruthy();
    expect(suggested.indexOf('bueno') === -1).toBeTruthy();
});
