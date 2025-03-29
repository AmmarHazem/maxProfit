# Max Profit Calculator

This repository contains a JavaScript function that calculates the maximum possible profit from an array of stock prices, where each element represents the stock price on a given day.

## Problem Statement
Given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day, write a function that returns the **maximum profit** you can achieve from buying and selling one stock.

**Note:** You may not engage in multiple transactions (i.e., you must sell the stock before you buy again).

### Example
```javascript
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
```

### How It Works
1. **Initialize Variables:**
   - `max` is initialized to `0` to track the maximum profit.
   - `buyValue` is set to `Infinity` to ensure any valid price will replace it.
2. **Iterate Through Prices:**
   - For each price, check if the difference between the current price and `buyValue` is greater than `max` and update `max` if true.
   - Update `buyValue` if the current price is lower than the current `buyValue`.
3. **Return `max`:** The maximum profit value is returned.

### Example Usage
```javascript
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
```

### Explanation
- In the first example, buying at `1` and selling at `6` gives a maximum profit of `5`.
- In the second example, no profitable transaction is possible, so the output is `0`.

### Complexity Analysis
- **Time Complexity:** `O(n)` — The algorithm iterates through the array once.
- **Space Complexity:** `O(1)` — Only constant space is used.
