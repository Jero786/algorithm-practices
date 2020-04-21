function isReturnRobotToOrigin(number) {
  const movements = number.split('');
  let x = 0;
  let y = 0;
  for (const movement of movements) {
    const [nextX, nextY] = getNextStep(x, y, movement);
    y = nextX;
    x = nextY;
  }
  return x === 0 && y === 0;
}

function getNextStep(x, y, movement) {
  if (movement === 'U') {
    return [x, y + 1];
  } else if (movement === 'D') {
    return [x, y - 1];
  } else if (movement === 'L') {
    return [x - 1, y];
  } else if (movement === 'R') {
    return [x + 1, y];
  }
}

module.exports = {
  isReturnRobotToOrigin
};