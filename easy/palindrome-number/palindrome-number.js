"use strict";
function isPalindrome(x) {
    const str = String(x);
    return str === str.split("").reverse().join("");
}
// Runtime 149 ms / Memory 58.31 mb
console.log(isPalindrome(565565));
function isPalindromeNum(x) {
    let digit;
    const originalNumber = x;
    let reversedNum = 0;
    if (x < 0)
        return false;
    if (x > 0 && x !== 10 && x < 12)
        return true;
    while (x > 0) {
        digit = x % 10;
        reversedNum = reversedNum * 10 + digit;
        x = Math.floor(x / 10);
    }
    return reversedNum === originalNumber;
}
// Runtime 143 ms / Memory 57.87 mb
console.log(isPalindromeNum(5656));
