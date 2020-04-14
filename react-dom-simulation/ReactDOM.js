
/*
 1. Build a react component APP (just remember syntax here)
 2. render:
    2. First-time:
            - Phase: 1
              - Create a Fiber Node tree from scratch from given React Element (APP). (normal tree, to fiber tree), crate each DOM instance needed (stateNode).
                Remember to create a working progress, Parent.stateNode === undefined, which contain a `child` pointer to the App fiber node.
            - Phase: 2 Commit
              - Container.appendChild(fiberNode.getAllStateNodes(WorkingProgressNode.child))
   3. Update-time:
          - Phase: 1 Render-Reconcile
            - Get from Store containers, the previous Fiber node Tree. ('#root', FiberNodeTree)
            - Create a New Fiber Tree from existing Elements (The working progress tree) in the following way:
               - Set flag state: STARGING_WORKING_IN_PROGRESS
               - Compare each existing Fiber node (should container a old element too), with New one.
                  A: The elements nodes are the same, just point the same reference Old fiberNode, to the new WPT.
                  B: The elements nodes are different, create a New FiverNode, and enqueue the changes in that node, and mark as effect.
               - Set flag state: ENDED_WORKING_IN_PROGRESS
          - Phase: 2 Commit
            - Take all effects (which contain each Fiber node with the address in the real DOM) and apply these effect to real DOM in the detached WPT.
            - Point the WPT to as new Child of Parent node. (here it's happening the double buffer)
 3 setState
     - That happens the same as Update-time phase that statement above.
*/
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
  //TODO: To be continue..
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

