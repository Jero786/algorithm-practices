const {exist} = require('.');


test('word search should return true when exist given word into the dictionary', () => {
  // Arrange
  // 3 rows
  // 4 columns
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  
  // Act
  const result = exist(board, 'ABCCED');
  
  // Assert
  expect(result).toBeTruthy();
});

test('word search should return false when exist given word into the dictionary', () => {
  // Arrange
  // 3 rows
  // 4 columns
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  
  // Act
  const result = exist(board, 'ABCB');
  
  // Assert
  expect(result).toBeFalsy();
});