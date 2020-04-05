test('should calculate properly the two longer track (with additional 30 sec) before the bus tour will finish', () => {
  const duration = 10;
  const tracks = [1,3,4,6];
  
  const [trackOne, trackTwo] = getBusMusic(tracks, duration);
  
  expect(trackOne).toEqual(3);
  expect(trackTwo).toEqual(6);
});

function getBusMusic(tracks, durationByMin) {
  const sortedTracks = tracks.sort((a,b) => a-b);
  let lowIndex = 0;
  let highIndex = sortedTracks.length - 1;
  const extraTime = .5;
  
  let lastLowIndex = lowIndex;
  let lastHighIndex = highIndex;
  let lastDiff = sortedTracks[highIndex] - sortedTracks[lowIndex];
  
  while(lowIndex < highIndex) {
    const sumTracksByMin = (sortedTracks[lowIndex] + sortedTracks[highIndex]);
    const totalTarget = sumTracksByMin + extraTime;
    const currentDiff = durationByMin - totalTarget;
    
    if (currentDiff > 0 && currentDiff < lastDiff) {
      lastDiff = currentDiff;
      lastHighIndex = highIndex;
      lastLowIndex = lowIndex;
    }
    
    if (totalTarget === durationByMin)  {
      break;
    } else if (totalTarget < durationByMin) {
      lowIndex++;
    } else {
      highIndex--;
    }
  }
  
  return [tracks[lastLowIndex], tracks[lastHighIndex]]
}
