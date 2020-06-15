/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i] + currentSum) > nums[i]) {
            currentSum += nums[i];
            if (currentSum > max) {
                max = currentSum;
            }
        } else {
            currentSum = nums[i];
            if (currentSum > max) {
                max = currentSum;
            }
        }
    }
    
    return max;
};