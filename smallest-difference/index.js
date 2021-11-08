function getSmallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let minLeft = Number.MAX_VALUE;
  let minRight = Number.MAX_VALUE;
  let minDistance = Number.MAX_VALUE;
  
  while (minDistance !== 0) {
    const currentDistance = getDistance(arrayOne[left], arrayTwo[right]);
    const valueLeft = arrayOne[left];
    const valueRight = arrayTwo[right];
    if (currentDistance === 0) {
      return [valueLeft, valueRight];
    } else {
      
      if (minDistance > currentDistance) {
        minLeft = left;
        minRight = right;
        minDistance = currentDistance;
      }
      
      if (valueLeft > valueRight) {
        right++;
      } else {
        left++
      }
    }
    
    if (left === arrayOne.length - 1 && valueRight > valueLeft) {
      break;
    }
  }
  
  return [arrayOne[minLeft], arrayTwo[minRight]];
}

function getDistance(origin, destination) {
  let distance = 0;
  for (let i = origin; i < destination; i++) {
    distance++;
  }
  return distance;
}

module.exports = {
  getSmallestDifference
}