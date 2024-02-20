"use strict";
function plusOne(digits) {
    let digitStr = "";
    digits.forEach((digit) => {
        digitStr += String(digit);
    });
    const bigIntValue = BigInt(digitStr);
    const incrementedValue = bigIntValue + BigInt(1);
    const plusOneStr = String(incrementedValue);
    const resultStr = plusOneStr.split("");
    const result = [];
    resultStr.forEach((digit) => {
        result.push(Number(digit));
    });
    return result;
}
// Runtime 56 ms / Memory 51.54 mb
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
