const {React, DummyComponent, DummyComponentWithEffect} = require('.');

test('should render properly the initial value count', () => {
  // Arrange
  const bck = console.log;
  const mockLog = jest.fn();
  console.log = mockLog;
  // Act
  React.render(DummyComponent);
  // Assert
  assertConsoleHasCalledTimes(1);
  assertConsoleBeenCalledWith("<div>Count: 1</div>");
  console.log = bck;
});

test('should render properly the state after click in the component', () => {
  // Arrange
  const bck = console.log;
  const mockLog = jest.fn();
  console.log = mockLog;
  // Act
  let app;
  app = React.render(DummyComponent);
  app.click();
  app.click();
  React.render(DummyComponent);
  // Assert
  assertConsoleHasCalledTimes(2);
  assertConsoleBeenCalledWith("<div>Count: 2</div>", 1);
  console.log = bck;
});

test('should render properly the state after click in the component', () => {
  // Arrange
  const bck = console.log;
  const mockLog = jest.fn();
  console.log = mockLog;
  // Act
  let app;
  app = React.render(DummyComponent);
  app.click();
  app.click();
  React.render(DummyComponent);
  // Assert
  assertConsoleHasCalledTimes(2);
  assertConsoleBeenCalledWith("<div>Count: 3</div>", 1);
  console.log = bck;
});

test('should render properly with useEffect', () => {
  // Arrange
  const bck = console.log;
  const mockLog = jest.fn();
  console.log = mockLog;
  // Act
  React.render(DummyComponentWithEffect);
  // Assert
  assertConsoleHasCalledTimes(2);
  assertConsoleBeenCalledWith("Hello from side effect", 0);
  assertConsoleBeenCalledWith("<div>Render component!</div>", 1);
  console.log = bck;
});


function assertConsoleHasCalledTimes(times) {
  expect(console.log.mock.calls.length).toEqual(times);
}

function assertConsoleBeenCalledWith(obj, index = 0) {
  expect(console.log.mock.calls[index][0]).toEqual(obj);
}
