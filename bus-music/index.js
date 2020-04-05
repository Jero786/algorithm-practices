/**
 * Given a list of tracks (each track is a number and represent their duration by minutes),
 * and total time duration of the bus tour, should retrieve the longest two track that
 * could be played during the tour, and you will need to calculate to have left 30 secs before finish the tour.
 *
 * Eg: Duration >= (track-1 + track-2) + 30 seconds.
 *
 * @param tracks
 * @param durationByMin
 * @returns {*[]}
 */
function getBusMusic(tracks, durationByMin) {
  const sortedTracks = tracks.sort((a,b) => a-b); // O(n log n)
  const extraTimeByMin = .5;
  
  let lowIndex = 0;
  let highIndex = sortedTracks.length - 1;
  let lastLowIndex = lowIndex;
  let lastHighIndex = highIndex;
  let lastDiff = sortedTracks[highIndex] - sortedTracks[lowIndex];
  
  // Time complexity: O(n log n)
  // Memory space: O(1)
  while(lowIndex < highIndex) {
    
    const sumTracksByMin = (sortedTracks[lowIndex] + sortedTracks[highIndex]);
    const totalTargetByMin = sumTracksByMin + extraTimeByMin;
    const currentDiff = durationByMin - totalTargetByMin;
    
    if (currentDiff > 0 && currentDiff < lastDiff) {
      lastDiff = currentDiff;
      lastHighIndex = highIndex;
      lastLowIndex = lowIndex;
    }
    
    if (totalTargetByMin === durationByMin)  {
      break;
    } else if (totalTargetByMin < durationByMin) {
      lowIndex++;
    } else {
      highIndex--;
    }
  }
  
  return [tracks[lastLowIndex], tracks[lastHighIndex]]
}

module.exports = {
  getBusMusic
};