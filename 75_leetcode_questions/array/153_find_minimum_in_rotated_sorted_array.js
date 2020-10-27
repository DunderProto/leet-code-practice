/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//     let min = Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < min) {
//             min = nums[i];
//         }
//     }
//     return min;
// };


var findMin = function(nums) {
    if (nums.length == 0) return -1;
    if (nums.length == 1) return nums[0];

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let midpoint = Math.floor((left + right) / 2);
        if (midpoint > 0 && nums[midpoint] < nums[midpoint - 1]) {
            return nums[midpoint];
        } else if (nums[midpoint] < nums[left] && nums[midpoint] <= nums[right]) {
            right = midpoint - 1;
        } else {
            left = midpoint + 1;
        }
    }

    return nums[left];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length == 0) return -1;
    if (nums.length == 1) return nums[0];

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let midpoint = Math.floor((left + right) / 2);
        if (midpoint > 0 && nums[midpoint] < nums[midpoint - 1]) {
            return nums[midpoint];
        } else if (nums[left] <= nums[midpoint] && nums[midpoint] > nums[right]) {
            left = midpoint + 1;
        } else {
            right = midpoint - 1;
        }
    }

    return nums[left];
}

