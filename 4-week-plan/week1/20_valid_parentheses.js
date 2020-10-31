/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let array = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ")" && array[array.length - 1] == "(") {
            array.pop();
        } else if (s[i] == "]" && array[array.length - 1] == "[") {
            array.pop();
        } else if (s[i] == "}" && array[array.length - 1] == "{") {
            array.pop();
        } else {
            array.push(s[i]);
        }
    }
    
    if (array.length == 0) {
        return true;
    } else {
        return false;
    }
};