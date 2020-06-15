/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dup = {};
    for (let i = 0; i < nums.length; i++) {
        if (dup[nums[i]]) {
            return true;
        } else {
            dup[nums[i]] = true;
        }
    }
    return false;
};