/**
 * Given a array of absolute distance flight and a max distance fly allowed,
 * return the longest two flight possibles taking care the mas distance fly allowed
 *
 * @param flights
 * @param maxDistanceFlyAllowed
 * @returns {number[]}
 */
const getTwoFlightIndex = (flights = [], maxDistanceFlyAllowed) => {
  
  if ((flights.length < 2) || maxDistanceFlyAllowed < 1) {
    throw Error('Given flags could not be less than two flights, and maxDistanceAllowed should be higher than zero');
  }

  let indexA = 0;
  let indexB = 1;
  let maxDistancePossible = Number.MIN_VALUE; // to be sure to be override first time
  
  // O(n 2) time complexity
  // O(1) space time
  for (let i = 0; i < flights.length - 1; i++) {
    for(let j = i + 1; j < flights.length; j++) {
      const currentFlySum = flights[i] + flights[j];
      if (currentFlySum === maxDistanceFlyAllowed) {
        return [i, j];
      } else if (currentFlySum < maxDistanceFlyAllowed && currentFlySum > maxDistancePossible) {
        indexA = i;
        indexB = j;
        maxDistancePossible = currentFlySum;
      }
    }
  }
  return [indexA, indexB];
};

module.exports = {
  getTwoFlightIndex
};
