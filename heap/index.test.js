const {printHeap, printHeapPerformant} = require('.');

test('should console the two min values of the array with a time complexity of O(n2)', () => {
  const old = console.log;
  console.log = jest.fn();
  // Arrange
  const data = "" +
    "5-" +
    "1 4-" +
    "1 9-" +
    "3-" +
    "2 4-" +
    "3";
  
  // Act
  printHeap(data);
  
  // Assert
   expect(console.log.mock.calls.length).toEqual(2);
   expect(console.log.mock.calls[0][0]).toEqual("4");
   expect(console.log.mock.calls[1][0]).toEqual("9");
});

test('should console the two min values of the array with a time complexity of O(n)', () => {
  const old = console.log;
  console.log = jest.fn();
  // Arrange
  const data = "" +
    "5-" +
    "1 4-" +
    "1 9-" +
    "3-" +
    "2 4-" +
    "3";
  
  // Act
  printHeapPerformant(data);
  
  // Assert
   expect(console.log.mock.calls.length).toEqual(2);
   expect(console.log.mock.calls[0][0]).toEqual("4");
   expect(console.log.mock.calls[1][0]).toEqual("9");
});