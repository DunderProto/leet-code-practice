/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const L = [];
    const R = [];
    
    const res = [];
    
    let leftAcc = 1;
    let rightAcc = 1;
    
    for (let i = 0; i < nums.length; i++) {
        L.push(leftAcc);
        leftAcc *= nums[i];
    }
    
    for (let j = nums.length - 1; j >= 0; j--) {
        R[j] = rightAcc;
        rightAcc *= nums[j];
    }
    
    for (let k = 0; k < L.length; k++) {
        res.push(L[k] * R[k]);
    }
    
    return res;
};

// Const Space Complexity

var productExceptSelf = function(nums) {
    const res = [];
    
    let leftAcc = 1;
    let rightAcc = 1;
    
    for (let i = 0; i < nums.length; i++) {
        res.push(leftAcc);
        leftAcc *= nums[i];
    }
    
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= rightAcc;
        rightAcc *= nums[j];
    }
    
    return res;
};