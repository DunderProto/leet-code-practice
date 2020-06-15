var twoSum = function(nums, target) {
    const numsHash = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in numsHash) return [numsHash[complement], i];
        numsHash[nums[i]] = i;
    }
};