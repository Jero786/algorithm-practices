const {isReturnRobotToOrigin} = require('.');
/**
 * There is a robot stargint at position (0,0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robots ends up at (0,0) after it completes its moves.
 *
 * THe move sequence is respresented by a string, and the character moves[i] represents its ith move. Valid moves are R(right), L (left), U (up), and D (down).
 * if the robot returns to the origin after it finidhes all if tis moves, return true. Otherwise, return false.
 *
 * NOTE: the way that the robot is "facing" is irrelevant. "R" will always make the robot to the right once. "L" will always make it move left, etc. Also, assume that the magnitude
 * of the robot's movements is the same for each move.
 */

test('should return to the origin position properly', () => {
  // Arrange
  const movements = 'UUDD';
  
  // Act
  const result = isReturnRobotToOrigin(movements);
  
  // Assert
  expect(result).toBeTruthy();
});

test('should not return to the origin position', () => {
  // Arrange
  const movements = 'UUD';
  
  // Act
  const result = isReturnRobotToOrigin(movements);
  
  // Assert
  expect(result).toBeFalsy();
});

test('should return to the origin position with longer path', () => {
  // Arrange
  const movements = 'UUDDLLRR';
  
  // Act
  const result = isReturnRobotToOrigin(movements);
  
  // Assert
  expect(result).toBeTruthy();
});