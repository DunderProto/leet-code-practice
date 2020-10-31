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

// FASTER SOLUTION
var isValid = function (s) {

    const obj = {
      "(": ")",
      "{": "}",
      "[": "]",
    }
  
    const stack = [];
  
    for (const paran of s) {
      if (obj.hasOwnProperty(paran)) {
        stack.push(paran)
      } else {
        const closeParan = stack.pop();
        if (paran !== obj[closeParan]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };