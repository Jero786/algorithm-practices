const {getBusMusic} = require('.');

test('should calculate properly the two longer track (with additional 30 sec) before the bus tour will finish', () => {
  // Arrange
  const duration = 10;
  const tracks = [1,3,4,6];
  
  // Act
  const [trackOne, trackTwo] = getBusMusic(tracks, duration);
  
  // Assert
  expect(trackOne).toEqual(3);
  expect(trackTwo).toEqual(6);
});
