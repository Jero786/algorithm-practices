const { Node } = require('.');

test('should initialize an empty array', () => {
  // Arrange & Act
  const linkedList = new Node();
  
  // Assert
  expect(linkedList.size()).toEqual(1);
})

test('should initialize linked with three nodes', () => {
  // Arrange & Act
  const linkedList = new Node(1, new Node(2, new Node (3)));
  
  // Assert
  expect(linkedList.size()).toEqual(3);
})

test('should add a new node in the linkedList', () => {
  // Arrange
  const linkedList = new Node(1, new Node(2, new Node (3)));
  
  // Act
  linkedList.add(new Node(4))
  
  // Assert
  expect(linkedList.size()).toEqual(4);
})

/**
 * https://www.geeksforgeeks.org/reverse-a-linked-list/
 */
test('should reverse linked list nodes', () => {
  // Arrange
  const head = new Node(1, new Node(2, new Node(3)))
  
  // Act
  const revertedLinkedList = Node.reverse(head);
  
  // Assert
  expect(revertedLinkedList.size()).toEqual(3);
  expect(revertedLinkedList.value).toEqual(3);
  expect(revertedLinkedList.next.value).toEqual(2);
  expect(revertedLinkedList.next.next.value).toEqual(1);
});