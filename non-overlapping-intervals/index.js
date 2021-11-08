/**
 * Runtime: 268 ms, faster than 63.54% of JavaScript online submissions for Non-overlapping Intervals.
 * Memory Usage: 70.1 MB, less than 46.18% of JavaScript online submissions for Non-overlapping Intervals.
 *
 * Link: https://leetcode.com/problems/non-overlapping-intervals/submissions/
 * @param intervals
 * @returns {number}
 */
function eraseOverlapIntervals(intervals) {
  let countRemoved = 0;
  let currentIndex = 0;
  // should be sorted
  intervals.sort((a, b) => a[0] - b[0]);
  
  for (let nextIndex = 1; nextIndex < intervals.length; nextIndex++) {
    
    const [, currentEnd] = intervals[currentIndex];
    const [nextStart, nextEnd] = intervals[nextIndex];
    
    // ask the first end with next start,
    if (currentEnd > nextStart) {
      // here we found a overlap
      countRemoved++;
      if (currentEnd > nextEnd) {
        // that simulate as we should removed the current index.
        currentIndex = nextIndex;
      }
    } else {
      // enter here means not overlap so current index move forward
      currentIndex = nextIndex;
    }
  }
  
  return countRemoved;
}

function getLengthRange([min, max]) {
  
  if (min > max) return 0;
  
  let result = 0;
  for (let i = min; i <= max; i++) {
    result++;
  }
  return result;
}

module.exports = {
  eraseOverlapIntervals
}