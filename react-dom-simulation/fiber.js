const React = require('react');
const get = require('lodash/get');
const {cloneDeep} = require('lodash/lang');

const createFiberNode = ({
                           stateNode,
                           child,
                           parent,
                           sibling,
                         } = {
  stateNode: React.createElement('div'),
  child: undefined,
  parent: undefined,
  sibling: undefined,
}) => ({
  stateNode,
  child,
  parent,
  sibling,
});

function isEqual(nodeOne, nodeTwo) {
  if (!nodeOne || !nodeTwo) {
    return false;
  }
  if (isEqualStateNode(nodeTwo, nodeOne) &&
    isEqualStateNode(nodeTwo.child, nodeOne.child) &&
    isEqualStateNode(nodeTwo.parent, nodeOne.parent) &&
    isEqualStateNode(nodeTwo.sibling, nodeOne.sibling)) {
    return true;
  } else {
    return false;
  }
}

function isEqualStateNode(nodeOne = {}, nodeTwo = {}) {
  if (nodeOne !== nodeTwo) { // in case both undefined will be true
    return get(nodeOne, 'stateNode.type') === get(nodeTwo, 'stateNode.type');
  } else {
    return true;
  }
}

const ROOT_FIBER_ELEMENT = {
  type: 'root',
  props: [],
};

const window = {};
window.requestIdleCallback = function (cb) {
  const start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      },
    });
  }, 1);
};
window.cancelIdleCallback = function (id) {
  clearTimeout(id);
};

/**
 * given a array of nodes
 */
const reactElementToFiberNode = (nodeReact, nodeFiber = createFiberNode()) => {
  if (nodeReact) {
    const newNodeFiber = createFiberNode({
      stateNode: nodeReact,//This should create real DOM
      parent: nodeFiber,
      sibling: createSibling(nodeFiber),
    });
    nodeFiber.child = newNodeFiber;
    const firstChild = getFirstChild(nodeReact);
    reactElementToFiberNode(firstChild, newNodeFiber);
  }
  return nodeFiber;
};

function getSiblings(node) {
  const children = get(node, 'props.children', []);
  const filterChildren = children.filter(React.isValidElement);
  return filterChildren.slice(1) || [];
}

function createSibling(nodeFiberParent) {
  const children = getSiblings(nodeFiberParent.stateNode);
  let lastSibling;
  let firstSibling;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const newSibling = {
      parent: nodeFiberParent,
      stateNode: child, // Create a real DOM instance
      sibling: lastSibling,
    };
    if (i === 0) {
      firstSibling = newSibling;
    }
    lastSibling = newSibling;
  }
  return firstSibling;
}

function getFirstChild(node) {
  const child = get(node, 'props.children.0');
  if (React.isValidElement(child)) {
    return child;
  }
}

function isEverySiblingEqual(fiberNode, fiberNodeTwo, result = []) {
  if (fiberNode) {
    result.push(isEqual(fiberNode, fiberNodeTwo));
  }
  
  // first walk throw siblings before continue, in order to
  // transverse the tree in a BFS way.
  if (fiberNode.sibling) {
    isEverySiblingEqual(fiberNode.sibling, fiberNodeTwo.sibling, result);
  }
  
  if (fiberNode.child) {
    isEverySiblingEqual(fiberNode.child, fiberNodeTwo.child);
  }
  
  return result.every(value => value);
}

function computeFiberTreesDifferences(fiberNodeOne, fiberNodeTwo) {
  const workingProgress = createFiberNode();
}



function isSameChild(nodeOne, nodeTwo) {
  return JSON.stringify(nodeOne.child) === JSON.stringify(nodeTwo.child);
}

function applyComputedDifferences() {
}

module.exports = {
  buildNodes,
  reactElementToFiberNode,
  isEverySiblingEqual
};