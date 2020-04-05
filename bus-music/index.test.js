const {getBusMusic} = require('.');

test('should calculate properly the two longer track (with additional 30 sec) before the bus tour will finish', () => {
  const duration = 10;
  const tracks = [1,3,4,6];
  
  const [trackOne, trackTwo] = getBusMusic(tracks, duration);
  
  expect(trackOne).toEqual(3);
  expect(trackTwo).toEqual(6);
});
