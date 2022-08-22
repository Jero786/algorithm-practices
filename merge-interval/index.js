/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the
 * non-overlapping intervals that cover all the intervals in the input.
 * @returns {number[][]}
 */
function getIntervals(intervals) {
  if (!intervals || intervals.length < 2) return intervals;

  const clonedIntervals = [...intervals].sort(([a, _], [b, __]) =>
    a === b ? 0 : a < b ? -1 : 1
  );

  let index = 0;
  while (index < clonedIntervals.length - 1) {
    const [minOne, maxOne] = clonedIntervals[index];
    const [minTwo, maxTwo] = clonedIntervals[index + 1];

    if (minTwo <= maxOne) {
      clonedIntervals.splice(index, 2, [
        Math.min(minOne, minTwo),
        Math.max(maxOne, maxTwo)
      ]);
      index = 0;
    } else {
      index++;
    }
  }

  return clonedIntervals;
}

module.exports = {
  getIntervals
};
