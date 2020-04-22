const React = require('react');

const {reactElementToDOM, ReactDOM, initializeFiberTree} =  require('./ReactDOM');

function createList() {
  const itemOneEl = React.createElement(
    "li",
    { key:"list-1",  className: "list__item--one" },
    "Item 1 brisa"
  );
  const itemTwoEl = React.createElement(
    "li",
    { key:"list-2", className: "list__item--two" },
    "Item 2 kiki"
  );
  const ListEl = React.createElement("ul", { className: "list" }, [
    itemOneEl,
    itemTwoEl
  ]);
  return ListEl;
}

test("should convert react element to HTMLElement", () => {
  // Arrange
  const ListEl = createList();
  
  // Act
  const domEl = reactElementToDOM(ListEl);
  
  // Assert
  expect(domEl.children[0].innerText).toBe(`Item 1 brisa`);
  expect(domEl.children[1].innerText).toBe(`Item 2 kiki`);
});

test("should append child properly", () => {
  // Arrange
  const ListEl = createList();
  const container = document.createElement("div");
  container.classList.add("container");
  
  // Act
  ReactDOM.render(ListEl, container);
  
  // Assert
  //TODO: WIP....
  //expect(container.innerHTML).toBe(`<div><ul classname=\"list\"><li classname=\"list__item--one\"></li><li classname=\"list__item--two\"></li></ul><li classname=\"list__item--two\"></li><li classname=\"list__item--one\"></li><span></span></div>`);
  //expect(container.childNodes[0].childNodes[0].innerText).toBe(`Item 1 brisa`);
  //expect(container.childNodes[0].childNodes[1].innerText).toBe(`Item 2 kiki`);
});

test('should initialize a fiber node properly', () => {
  // Arrange
  const childOne = React.createElement('div', {className: 'childOne', key: 'child-one'}, 'child one');
  const childTwo = React.createElement('div', {className: 'childTwo', key: 'child-two'}, 'child two');
  const parentDiv = React.createElement('div', {className: 'parent'},[childOne, childTwo] );
  
  // Act
  const fiberNode = initializeFiberTree(parentDiv);
  
  // Assert
  expect(fiberNode.parent).toBeUndefined();
  expect(fiberNode.sibling).toBeUndefined();
  expect(fiberNode.child).toBeDefined();
  expect(fiberNode.stateNode.innerHTML).toBe('');
});