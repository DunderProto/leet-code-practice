/**
 * @param {number[]} prices
 * @return {number}
 */

// NAIVE SOLUTION
var maxProfit = function(prices) {
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if ((prices[j] - prices[i]) > max) {
                max = prices[j] - prices[i];
            }
        }
    }
    return max;
};

// O(n)
var maxProfit = function(prices) {
    let minVal = Infinity;
    let maxProf = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minVal) {
            minVal = prices[i];
        } else if ((prices[i] - minVal) > maxProf) {
            maxProf = prices[i] - minVal;
        }
    }
    return maxProf;
};