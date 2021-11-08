const getAmountsWaysToClimbStairs = (amountSteps) => {
  if (amountSteps < 2) {
    return 1;
  }
  const waysClimbUp = Array.from({length: amountSteps});
  waysClimbUp[0] = 1; // There is a unique way to climb up a stair with non-steps
  waysClimbUp[1] = 1 // There is a unique way to climb up a stair with a single step
  let i = 2;
  for (; i <= amountSteps; i++) {
    waysClimbUp[i] = waysClimbUp[i - 1] + waysClimbUp[i - 2];
  }

  return waysClimbUp.pop();
}

module.exports = {
  getAmountsWaysToClimbStairs
}