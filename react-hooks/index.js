const React = (() => {
  // the list of slot value reference for each hook
  const hooks = [];
  // the index hooks, once we create more than one hook this value
  // will increment by one per hook created
  let index = 0;
  
  function render(component) {
    // we need reset state hooks index for each render to star
    // calculate the proper render hooks, over and over again on each render
    index = 0;
    const comp = component()
    comp.render();
    return comp;
  }
  
  function useState(initValue) {
    const id = index;
    const state = hooks[id] || initValue;
    const setState = newValue => hooks[id] = newValue
    index++;
    return [state, setState];
  }
  
  function useRef(value) {
    // only matters the state(first position), you never should call setState from ref.
    return useState({current: value})[0];
  }
  
  function useEffect(cb, dependency) {
    const oldDependency = hooks[index];
    let hasChanged = true;
    
    if (oldDependency) {
      hasChanged = oldDependency.some((value, index) => !Object.is(value, dependency[index]));
    }
    
    if (hasChanged) cb();
    
    hooks[index] = dependency;
  }
  
  return {
    useState,
    useEffect,
    render,
    useRef,
  }
})();

function DummyComponent() {
  const [count, setCount] = React.useState(1);
  return {
    render: () => {
      console.log(`<div>Count: ${count}</div>`);
    },
    click: () => {
      setCount(count + 1);
    },
  }
}

function DummyComponentWithEffect() {
  React.useEffect(() => {
    console.log('Hello from side effect');
  }, []);
  
  return {
    render: () => {
      console.log(`<div>Render component!</div>`);
    },
  }
}

module.exports = {
  React,
  DummyComponent,
  DummyComponentWithEffect,
}