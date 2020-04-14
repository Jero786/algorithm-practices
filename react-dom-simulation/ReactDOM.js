const ReactDOM = {
  
  currentTree: undefined,
  
  workingInProgressTree: undefined,
  
  render(reactElement, container) {
    
    if (!this.currentTree) {
      this.currentTree = initializeFiberTree(reactElement);
    }
    
    // Initialize (Fist time call Render)
    // 1. [WIP] Initialize the FiberNodes instances
    // 2. Commit all tree to the DOM
    
    // Updating Tree (next time to call render)
    // 1. Compare initialized tree with the new ReactElement and generate
    // The new Working Progress Tree (re-using non-changed instances and only create a new fiber nodes the different types nodes)
    // Separate in Two phases, Initializing comparing, and Complete.
    // 2. Flushing Commit to the node
  
    commitChangesToDOM(container, reactElement);
  }
};



/**
 * Given a ReactElement, will return a complete FiberNode tree.
 * @param {*} reactElement
 */
function initializeFiberTree(reactElement) {
  const stateNode = reactElementToDOM(reactElement);
  
  return {
    child: {},
    stateNode,
  }
}

function createFiberNode() {
}

function commitChangesToDOM(container, reactElement) {
  const domElement = reactElementToDOM(reactElement);
  container.appendChild(domElement);
}

function reactElementToDOM(reactElement) {
  const domEl = document.createElement(reactElement.type);
  Object.keys(reactElement.props).forEach(key => {
    if (key === "children") {
      if (hasSingleChildrenText(reactElement)) {
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

function hasSingleChildrenText(reactElement) {
  const children = reactElement.props.children;
  return typeof children === "string";
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

