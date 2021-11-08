const {Node, removeDuplicate} = require('.');

test('remove duplicates linked list', () => {
  // Arrange
  const linkedList = new Node(1,
    new Node(1,
      new Node(3,
        new Node(4,
          new Node(4,
            new Node(4,
              new Node(5,
                new Node(6,
                  new Node(6)
                )
              )
            )
          )
        )
      )
    ));
  // Act
  const result = removeDuplicate(linkedList);
  // Assert
  expect(result.value).toEqual(1);
  expect(result.next.value).toEqual(3);
  expect(result.next.next.value).toEqual(4);
  expect(result.next.next.next.value).toEqual(5);
  expect(result.next.next.next.next.value).toEqual(6);
  expect(result.next.next.next.next.next).toBeUndefined();
});