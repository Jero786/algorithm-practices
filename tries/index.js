/**
 * Given text, retrieve list of words suggested from a dictionary in a efficiently way.
 *
 * Eg:
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
function buildTrie(dictionary) {
  const parentNode = {nodes: [], isEnd: false, word: undefined};
  for (const word of dictionary) {
    buildTrieNode({word, node: parentNode});
  }
  return parentNode;
}

/**
 * Given Trie, return the text matchers.
 * @param node
 * @param text
 * @param results
 * @param index
 */
function getMatchers(node, text, results = [], index = 1) {
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

function buildTrieNode({word, node, index = 0}) {
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
      return buildTrieNode({word, node: existingChildNode, index});
    } else {
      const newChildNode = createNode({
        isEnd: word.length === nextNodeTextTarget.length,
        text: nextNodeTextTarget
      });
      node.nodes.push(newChildNode);
      return buildTrieNode({word, node: newChildNode, index});
    }
  }
  
  const newChildNode = createNode({isEnd: word.length === textTarget.length, text: textTarget});
  node.nodes.push(newChildNode);
  return buildTrieNode({word, node: newChildNode, index});
}

function findNode(node, textTarget) {
  if (node && node.nodes && node.nodes.length > 0) {
    return node.nodes.find(node => node.text === textTarget);
  }
}

const createNode = ({isEnd = false, nodes = [], text}) => ({
  isEnd,
  nodes,
  text
});

function getAllChildNodes(node, results) {
  if (node.isEnd) {
    results.push(node.text);
  }
  for (const childNode of node.nodes) {
    result = getAllChildNodes(childNode, results);
  }
  return results;
}

module.exports = {
  buildTrie,
  getMatchers
}
