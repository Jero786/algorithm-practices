const React = require('react');
const get = require('lodash/get');
const filter = require('lodash/filter');
/*

1) Demo inicial
1. OK Creamos los elementos de React
2. OK Insertamos al DOM

2) Startup
1. OK Creamos los element React element
2. >>> Creamos el arbol con las instancias de Fiber, con sus respectivos nodos DOM, hijos y hermanos
3. Applicamos los cambios al DOM del arbol

3) Update
- Comparamos los nodos modificamos con el arbol existen, y creamos un segundo arbol, con el mix, de las instancias
que no se modiificaron con los nuevos nodos (effects).
- Applicamos los cambios al DOM (effects)
*/


const ReactDOM = {
  currentTree: undefined,
  
  render(reactElement, container) {
    if (!this.currentTree) {
      // initialize a fresh Fiber nodes
      this.currentTree = initFiberNode(reactElement);
    }
    
    // render/reconcilier phease
    //const workingProgressTree = getEffects(reactElement, this.currentTree);
    
    // commit phease
    applyEffectsToDOM(workingProgressTree, container);
    
    // Only child
    this.currentTree = workingProgressTree;
  }
};

function getEffects() {
}

function applyEffectsToDOM(effects, container) {
  //container.appendChild(domEl);
}

const initFiberNode = (reactElement, parentFiber) => {
  debugger;
  const childFiberNode = createFibernode({
    stateNode: reactElementToDOM(reactElement),
    sibling: getSibling(parentFiber),
    child: undefined,
    parent: parentFiber
  });
  if (hasChildren(reactElement)) {
    const children = reactElement.props.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childFiber = initFiberNode(child, childFiberNode);
      childFiberNode.child = childFiber;
    }
  }
  return childFiberNode;
};

function getChildren(reactElement) {
  const list = get(reactElement, "props.children", []);
  return filter(list, React.isValidElement, []) || [];
}

function hasChildren(reactElement) {
  const children = getChildren(reactElement);
  return get(children, "length", 0) > 0;
}

function getSibling(parentFiber) {
  if (parentFiber) {
    const parentNode = parentFiber.stateNode;
    let latestSibling;
    for (let i = 1; i < parentNode.children.length; i++) {
      const newSibling = createFibernode({
        stateNode: reactElementToDOM(parentNode.children[i]),
        parent: parentNode,
        sibling: latestSibling
      });
      latestSibling = newSibling
    }
    return latestSibling;
  }
}

function getFirstChild(reactElement) {
  if (reactElement && reactElement.props && reactElement.props.children) {
    return reactElement.props.children[0];
  }
}

const DEFAULT_FIBER_NODE = {
  parent: undefined,
  child: undefined,
  sibling: undefined,
  nodeState: undefined
};

const createFibernode = ({
                           stateNode,
                           child,
                           sibling,
                           parent
                         } = DEFAULT_FIBER_NODE) => ({
  stateNode,
  child,
  sibling,
  parent
});

function reactElementToDOM(
  reactElement = {type: "div", props: {children: []}}
) {
  const domElement = document.createElement(reactElement.type);
  for (const attr of Object.keys(reactElement.props || {})) {
    if (attr === "children") {
      if (typeof reactElement.props.children === "string") {
        domElement.innerText = reactElement.props.children;
      }
    } else {
      domElement.setAttribute(attr, reactElement.props[attr]);
    }
  }
  
  const children = getChildren(reactElement);
  
  if (children.length >= 1) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      domElement.appendChild(reactElementToDOM(child));
    }
  }
  
  return domElement;
}


let document;

beforeEach(() => {
  document = (new jsdom.JSDOM(`<!DOCTYPE html>`)).window.document;
});

test('should init working tree properly', () => {
  // React element
  const itemOneEl = React.createElement(
    "li",
    {className: "list__item"},
    "Item 1 brisa"
  );
  const itemTwoEl = React.createElement(
    "li",
    {className: "list__item"},
    "Item 2 kiki"
  );
  const listEl = React.createElement("ul", {className: "list"}, [
    itemOneEl,
    itemTwoEl
  ]);
  
  // Act
  const fiberNodes = initFiberNode(listEl);
  
  // Expect
  expect(fiberNodes).toBe('<div>brisaa</div>')
});
