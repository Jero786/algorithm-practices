/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the
 * non-overlapping intervals that cover all the intervals in the input.
 * @returns {number[][]}
 */
function getIntervals(intervals) {
  
  if (intervals.length === 1) {
    return intervals
  }
  // clone to don't change given interval
  let newInterval = [...intervals];
  
  // sort intervals by first value of each interval
  newInterval.sort(([a, _], [b, __]) =>
    (a === b)
      ? 0
      : a < b
      ? -1
      : 1
  );
  
  let index = 0;
  while (index < newInterval.length - 1) {
    const [minOne, maxOne] = newInterval[index];
    const [minTwo, maxTwo] = newInterval[index + 1];
    if (minTwo >= minOne && minTwo <= maxOne) {
      newInterval.splice(index, 2, [Math.min(minOne, minTwo), Math.max(maxOne, maxTwo)]);
      index = 0;
    } else {
      index++;
    }
  }
  
  return newInterval;
}


module.exports = {
  getIntervals
}