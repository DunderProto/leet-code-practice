/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let arr = new Array(amount + 1);
    arr.fill(amount + 1);
    arr[0] = 0;
    let changed = false;
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (j == coins.length - 1 &&
                i - coins[j] < 0 &&
                changed == false) {
                arr[i] = -1;
            }
            
            if (i - coins[j] >= 0) {
                arr[i] = Math.min(arr[i], arr[i - coins[j]] + 1);
                changed = true;
            }
        }
    }
    
    return arr[arr.length - 1];
};

// ACCEPTED SOLUTION
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let arr = new Array(amount + 1);
    arr.fill(amount + 1);
    arr[0] = 0;
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                arr[i] = Math.min(arr[i], arr[i - coins[j]] + 1);
            }
        }
    }
    
    return arr[amount] > amount ? -1 : arr[amount];
};