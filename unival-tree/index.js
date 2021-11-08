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
  const isUnival = node.value === univalValue;
  
  return isUnival && (node.hasChildren()
      ? node.nodes.every(child => isUnivalTree(child, univalValue))
      : true
  )
}

module.exports = {
  isUnivalTree,
  createUnivalNode,
};