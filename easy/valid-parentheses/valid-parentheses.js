"use strict";
function isValid(s) {
    const array = [];
    const obj = { "(": ")", "{": "}", "[": "]" };
    if (s.length % 2 !== 0) {
        return false;
    }
    for (const br of s) {
        if (br in obj) {
            array.push(br);
        }
        else if (array.length === 0 || obj[array.pop()] !== br) {
            return false;
        }
    }
    return array.length === 0;
}
// Runtime 70 ms / Memory 52.89 mb
console.log(isValid("()[]{}"));
console.log(isValid("(]{}"));
console.log(isValid("[}"));
