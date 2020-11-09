/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let current = Infinity;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < current) {
            current = prices[i];
        } else {
            if (prices[i] - current > max) {
                max = prices[i] - current;
            }
        }
    }
    
    return max;
};