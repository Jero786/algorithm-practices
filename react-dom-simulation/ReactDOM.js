const get = require('lodash/get');

const ReactDOM = {
  
  currentTree: undefined,
  
  workingInProgressTree: undefined,
  
  render(reactElement, container) {
    
    if (!this.currentTree) {
      this.currentTree = initializeFiberTree(reactElement);
    }
    // Initialize (Fist time call Render)
    // 1. [DONE] Initialize the FiberNodes instances
    // 2. [IN_PROGRESS] Commit all tree to the DOM
    
    // Updating Tree (next time to call render)
    // 1. Compare initialized tree with the new ReactElement and generate
    // The new Working Progress Tree (re-using non-changed instances and only create a new fiber nodes the different types nodes)
    // Separate in Two phases, Initializing comparing, and Complete.
    // 2. Flushing Commit to the node
  
    commitChangesToDOMFromFiberTree(container, this.currentTree);
  }
};

/*

  <div>
    <div>
    </div>
    <div>
    </div>
  </div>

 */

/**
 * Given a ReactElement, will return a complete FiberNode tree.
 * @param {*} reactElement
 * @param {*} parentFiberNode
 */
function initializeFiberTree(reactElement, parentFiberNode = createFiberNode()) {
  const stateNode = reactElementToDOM(reactElement);
  const childFiberNode = createFiberNode({
    stateNode,
    parent: parentFiberNode,
    sibling: getFiberSibling(reactElement, parentFiberNode)
  });
  
  parentFiberNode.child = childFiberNode;
  
  if (hasSingleTextChildren(reactElement)) {
    childFiberNode.child = createTextFiberNode(reactElement.props.children[0], childFiberNode);
  } else if (hasChildren(reactElement)) {
    for (const child of reactElement.props.children) {
      initializeFiberTree(child, childFiberNode);
    }
  }
  
  return parentFiberNode;
}

function getFiberSibling(parentReactElement, parentFiberNode) {
  if (hasSingleTextChildren(parentReactElement)) {
    return undefined;
  }
  const children = parentReactElement.props.children;
  let firstFiberSibling;
  let lastFiberSibling;
  
  if (children && children.length > 1) {
    for (let i = 1; i < children.length; i++) {
      const siblingFiberNode = children[i];
      const siblingDOM = reactElementToDOM(siblingFiberNode);
      lastFiberSibling = createFiberNode({
        stateNode: siblingDOM,
        parent: parentFiberNode,
        sibling: lastFiberSibling,
      });
      if (i === 1) {
        firstFiberSibling = lastFiberSibling;
      }
    }
  }
  return firstFiberSibling;
}

function createTextFiberNode(text, parentFiberNode) {
  const spanEl = document.createElement('span');
  spanEl.innerText = text;
  return createFiberNode({
    stateNode: spanEl,
    parent: parentFiberNode,
    sibling: undefined,
    child: undefined,
  })
}

function createFiberNode({
                           stateNode,
                           parent,
                           sibling,
                           child,
                         } = {}) {
  
  return {
    stateNode: stateNode || document.createElement('div'),
    parent,
    sibling,
    child
  }
}


function hasChildren(reactElement) {
  return get(reactElement, 'props.children.length') > 1;
}

function hasSingleTextChildren(reactElement) {
  const children = get(reactElement, 'props.children');
  return typeof children === 'string';
}

function commitChangesToDOM(container, reactElement) {
  const domElement = reactElementToDOM(reactElement);
  container.appendChild(domElement);
}

function commitChangesToDOMFromFiberTree(container, fiberTree) {
  const detachedNode = getDetachedDOM(fiberTree);
  container.appendChild(detachedNode);
}

function getDetachedDOM(fiberNode, domEl) {
  if (!domEl) {
    domEl = fiberNode.stateNode;
  }
  if (fiberNode.child) {
    domEl.appendChild(fiberNode.child.stateNode);
    populateDomChildren(domEl, fiberNode);
    getDetachedDOM(fiberNode.child, domEl);
  }
  
  return domEl;
}

function populateDomChildren(parentDomEl, fiberNode) {
  if (fiberNode && fiberNode.sibling) {
    parentDomEl.appendChild(fiberNode.sibling.stateNode);
    populateDomChildren(parentDomEl, fiberNode.sibling);
  }
}

function reactElementToDOM(reactElement) {
  const domEl = document.createElement(reactElement.type);
  Object.keys(reactElement.props).forEach(key => {
    if (key === "children") {
      if (hasSingleTextChildren(reactElement)) {
        domEl.innerText = reactElement.props.children;
      } else {
        for (const child of reactElement.props[key]) {
          if (typeof child === "string") {
            domEl.innerText = child;
          } else {
            addChild(domEl, reactElementToDOM(child));
          }
        }
      }
    } else {
      domEl.setAttribute(key, reactElement.props[key]);
    }
  });
  
  return domEl;
}

function addChild(container, child) {
  if (typeof child === "string") {
    container.innerText = child;
  } else {
    container.appendChild(child);
  }
}

module.exports = {
  reactElementToDOM,
  ReactDOM,
  initializeFiberTree
};

