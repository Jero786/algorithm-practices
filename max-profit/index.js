/**
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
 * @param prices
 * @returns {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let lowestPrice = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price < lowestPrice) lowestPrice = price;
    const profit = price - lowestPrice;
    maxProfit = Math.max(profit, maxProfit)
  }
  
  return maxProfit;
}

module.exports = {
  maxProfit
}