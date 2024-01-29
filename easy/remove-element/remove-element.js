"use strict";
function removeElement(numbers, val) {
    if (numbers.length === 0) {
        return 0;
    }
    let k = 0;
    numbers.forEach((number) => {
        if (number !== val) {
            numbers[k] = number;
            k++;
        }
    });
    return k;
}
// Runtime 57 ms / Memory 51.43 mb
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const result1 = removeElement(num1, 6);
console.log(`Output : ${result1}, numbers = ${num1.slice(0, result1)}`);
const num2 = [11, 11, 11, 11, 12, 13];
const result2 = removeElement(num2, 11);
console.log(`Output : ${result2}, numbers = ${num2.slice(0, result2)}`);
