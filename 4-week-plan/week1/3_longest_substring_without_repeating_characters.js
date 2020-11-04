/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) {
        return 0;
    }
    
    let seen = {};
    
    let i = 0;
    let j = 0;
    let longest = 0;
    let count = 0;
    
    while (i < s.length) {
        if (!seen[s[i]]) {
            seen[s[i]] = true;
            count++;
            i++;
            longest = Math.max(longest, count);
        } else {
            delete seen[s[j]];
            count--;
            j++;
        }
    }
    
    return longest;
};