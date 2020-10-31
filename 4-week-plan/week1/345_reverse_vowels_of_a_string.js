/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let res = "";
    let vowels = "aeiou";
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            stack.push(s[i]);
        }
    }
    
    for (let j = 0; j < s.length; j++) {
        if (vowels.includes(s[j].toLowerCase())) {
            res += stack.pop();
        } else {
            res += s[j];
        }
    }
    
    return res;
};