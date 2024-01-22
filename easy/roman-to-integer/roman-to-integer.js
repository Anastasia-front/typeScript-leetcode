"use strict";
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const compliance = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let prev = 0;
    let current = 0;
    let result = 0;
    const reverted = s.split("").reverse().join("");
    for (let i = 0; i < reverted.length; i++) {
        current = compliance[reverted[i]];
        if (current < prev) {
            result -= current;
        }
        else {
            result += current;
        }
        prev = current;
    }
    return result;
};
// Runtime 117 ms / Memory 55.37 mb
console.log(romanToInt("MXCLIV"));
