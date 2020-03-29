/**
 * Given value and node, create a UnivalNode object.
 * @param value
 * @param nodes
 * @returns {{nodes, hasChildren: (function(): boolean), value: *}}
 */
const createUnivalNode = ({value, nodes = []}) => ({
  nodes,
  value,
  hasChildren: () => nodes && nodes.length > 0
});

/**
 * Given Unival Tree and unic value to check, return if given Tree has a Unique value.
 * @param node
 * @param univalValue
 * @param resultNodes
 * @returns {boolean}
 */
function isUnivalTree(node, univalValue, resultNodes = []) {
  
  if (node.hasChildren()) {
    for (const nodeChild of node.nodes) {
      return isUnivalTree(nodeChild, univalValue, resultNodes);
    }
  } else {
    resultNodes.push(node.value === univalValue);
  }
  
  return resultNodes.every(value => value);
}

module.exports = {
  isUnivalTree,
  createUnivalNode,
};