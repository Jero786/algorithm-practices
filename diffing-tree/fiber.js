const React = require('react');
const get = require('lodash/get');
const ReactDOMServer = require('react-dom/server');

const createFiberNode = ({
                           stateNode = 'div',
                           child = undefined,
                           parent = undefined,
                           sibling = undefined
                         }) => ({
  stateNode,
  child,
  parent,
  sibling
});

const toEl = React.createElement;

const buildTreeOne = () => {
  const childOneEl = toEl('li', {className: 'child-list', key: 'key-1'}, 'node 1');
  const childTwoEl = toEl('li', {className: 'child-list', key: 'key-2'}, 'node 2');
  
  const listEl = toEl(
    'ul',
    {className: 'list'},
    [childOneEl, childTwoEl]
  );
  return toEl(
    'div',
    {className: 'parent-node-one'},
    [listEl]
  );
};
const buildTreeTwo = () => {
  const childOneEl = toEl('li', {className: 'child-list', key: 'key-1'});
  const childTwoEl = toEl('li', {className: 'child-list', key: 'key-2'});
  
  const listEl = toEl(
    'ul',
    {className: 'list'},
    [childOneEl, childTwoEl]
  );
  return toEl(
    'div',
    {className: 'parent-node-two'},
    [listEl]
  );
};

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

function generateWorkingProgressNode(reactTreeNode) {
  const workingProgressNode = React.cloneElement(reactTreeNode);
  
  //TODO: continuar
}

function workLoop(workingProgressNode) {

}

function buildNodes() {
  // Input
  const treeNodeOriginal = buildTreeOne();
  const treeNodeLatest = buildTreeTwo();
  
  // Create a Fiber nodes, siblings and relation ships
  const fiber = createFiberNode({
    stateNode: treeNodeOriginal,
    parent: undefined,
    sibling: undefined,
    child: undefined,
  });
  const fiberTreeOne = toFiberNode({nodeReact: getFirstChild(treeNodeOriginal), nodeFiber: fiber});
  const fiberTreeTwo = toFiberNode({nodeReact: getFirstChild(treeNodeLatest), nodeFiber: fiber});
  
  const computedDifferences = computeDifferences(fiberTreeOne, fiberTreeTwo);
  
  // Output
  const resultComputationElements = applyComputedDifferences(treeNodeOriginal, computedDifferences);
}


/**
 * given a array of nodes
 */
const toFiberNode = ({nodeFiber, nodeReact}) => {
  debugger
  const firstChild = getFirstChild(nodeReact);
  
  if (nodeReact) {
    const newNodeFiber = createFiberNode({
      stateNode: nodeReact,
      parent: nodeFiber,
      sibling: createSibling(nodeFiber),
    });
    nodeFiber.child = newNodeFiber;
    toFiberNode({nodeFiber: newNodeFiber, nodeReact: firstChild});
  }
  return nodeFiber;
};

function getSiblings(node) {
  const children = get(node, 'props.children', []);
  const filterChildren = children.filter(React.isValidElement);
  return filterChildren.slice(1) || [];
}

// Tine que devolver lista anidada
function createSibling(nodeFiberParent) {
  const children = getSiblings(nodeFiberParent.stateNode);
  let lastSibling;
  let firstSibling;
  for (let i = 0; i < children.length;i++) {
    const child = children[i];
    const newSibling = {
      parent: nodeFiberParent,
      stateNode: child,
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

function computeDifferences(fiberTreeOne) {
  return fiberTreeOne;
}

function applyComputedDifferences() {
}

module.exports = {
  buildNodes
};