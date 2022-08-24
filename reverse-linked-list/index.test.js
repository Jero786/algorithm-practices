const { reverseLinkedList } = require('.');

const Node = (value, next) => ({
  next,
  value
});

test('reverse linked list', () => {
  const head = Node(1, Node(2, Node(3, Node(4, Node(5)))));

  const result = reverseLinkedList(head);

  expect(result.value).toEqual(5);
  expect(result.next.value).toEqual(4);
  expect(result.next.next.value).toEqual(3);
  expect(result.next.next.next.value).toEqual(2);
  expect(result.next.next.next.next.value).toEqual(1);
});
