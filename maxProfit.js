/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let buyValue = Infinity;
  for (let i = 0; i < prices.length; i += 1) {
    const currentSellValue = prices[i];
    if (currentSellValue - buyValue > max) {
      max = currentSellValue - buyValue;
    }
    if (buyValue > prices[i]) {
      buyValue = prices[i];
    }
  }
  return max;
};
