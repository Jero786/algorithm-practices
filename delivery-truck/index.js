/**
 * Problem:
 *
 * Given the truck's maximum distance and the nodes distances,
 * returns the travel that visits the most nodes.
 *
 */

/**
 *
 * Given a path and max distance allowed return the longest path found.
 * @param path
 * @param maxDistanceAllowed
 * @returns {[]|*[]}
 */
const getBestPath = ({path, maxDistanceAllowed}) => {
  if (!path || path.length === 0) return [];
  
  const sortedPath = path.sort((a, b) => a - b);
  let accumulator = [];
  let total = 0;
  
  for (let i = 0; i < path.length; i++) {
    const value = sortedPath[i];
    if ((total + value) < maxDistanceAllowed) {
      total += value;
      accumulator.push(value);
    } else {
      break;
    }
  }
  
  return accumulator;
};

module.exports = {
  getBestPath
};