const {addTwoNumbers, LinkedNode} = require('.');
/**
 * TechSeries link: https://www.techseries.dev/products/coderpro/categories/1831147/posts/6176705
 */
test('add two numbers as a linked list', () => {
  // Arrange
  const linkedNodeOne = new LinkedNode(
    2,
    new LinkedNode(
      4,
      new LinkedNode(3)
    )
  );
  const linkedNodeTwo = new LinkedNode(
    5,
    new LinkedNode(
      6,
      new LinkedNode(4)
    )
  );
  
  // Act
  const actualValue = addTwoNumbers(linkedNodeOne, linkedNodeTwo);
  
  // Assert
  expect(actualValue.value).toEqual(7);
  expect(actualValue.next.value).toEqual(0);
  expect(actualValue.next.next.value).toEqual(8);
});