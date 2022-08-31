const { maxProfit } = require('.');

describe('best time to buy and sell', () => {
  it('get max profit', () => {
    const pricesByDay = [7, 1, 5, 3, 6, 4];

    const result = maxProfit(pricesByDay);

    expect(result).toEqual(5);
  });
});
