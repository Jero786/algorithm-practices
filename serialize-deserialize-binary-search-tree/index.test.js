const {serialize, deserialize, Node} = require('.');

test('serialize binary search tree', () => {
  // Arrange
  const tree = new Node(1,
    new Node(2),
    new Node(3,
      new Node(4),
      new Node(5),
    ),
  );
  // Act
  const result = serialize(tree);
  // Assert
  expect(result).toEqual('[1,2,null,null,3,4,null,null,5,null,null]');
});

/*
IN PROGRES....
test('deserialize binary search tree', () => {
  // Arrange
  const text = '[1,2,null,null,3,4,null,null,5,null,null]';
  // Act
  const result = deserialize(text);
  // Assert
  expect(JSON.stringify(result)).toEqual(JSON.stringify(new Node(1,
    new Node(2),
    new Node(3,
      new Node(4),
      new Node(5),
    ),
  )));
});
 */