/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let hash = {};
    let hash2 = {};
    
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] && t[i] != hash[s[i]]) {
            return false;
        } else {
            hash[s[i]] = t[i];
        }
        
        if (hash2[t[i]] && s[i] != hash2[t[i]]) {
            return false;
        } else {
            hash2[t[i]] = s[i];
        }
    }
    
    return true;
};