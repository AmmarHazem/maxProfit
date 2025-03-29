/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i += 1) {
    for (let j = i + 1; j < prices.length; j += 1) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > max) {
        max = currentProfit;
      }
    }
  }
  return max;
};
