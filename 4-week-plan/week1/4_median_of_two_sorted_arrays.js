/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < nums1.length && rightIndex < nums2.length) {
        if (nums1[leftIndex] < nums2[rightIndex]) {
            merged.push(nums1[leftIndex]);
            leftIndex++;
        } else {
            merged.push(nums2[rightIndex]);
            rightIndex++;
        }
    }
    
    merged = merged
        .concat(nums1.slice(leftIndex))
        .concat(nums2.slice(rightIndex));
    
    if (merged.length % 2 != 0) {
        return merged[Math.floor(merged.length / 2)];
    } else {
        return (merged[Math.floor(merged.length / 2)] + merged[Math.floor(merged.length / 2 - 1)]) / 2
    }
};