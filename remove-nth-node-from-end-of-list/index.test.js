const {removeNthFromEnd, Node} = require('.');

test('', () => {
  // Arrange
  const targetIndex = 2;
  const head = new Node(1,
    new Node(2,
      new Node(3,
        new Node(4,
          new Node(5)
        )
      )
    )
  );
  // Act
  const result = removeNthFromEnd(head, targetIndex);
  // Assert
  expect(result.value).toEqual(1);
  expect(result.next.value).toEqual(2);
  expect(result.next.next.value).toEqual(3);
  expect(result.next.next.next.value).toEqual(5);
});