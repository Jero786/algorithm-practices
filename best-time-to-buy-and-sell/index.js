function maxProfit(prices) {
  let lowestPrice = prices[0];
  let maxProfit = Number.MIN_VALUE;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price < lowestPrice) lowestPrice = price;

    const currentProfit = price - lowestPrice;

    maxProfit = Math.max(maxProfit, currentProfit);
  }

  return maxProfit;
}

module.exports = {
  maxProfit
};
