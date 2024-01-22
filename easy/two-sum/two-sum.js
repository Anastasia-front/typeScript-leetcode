"use strict";
function twoSum(numbers, target) {
    const objectOfNumbers = {};
    let complement;
    for (let i = 0; i < numbers.length; i++) {
        complement = target - numbers[i];
        // console.log(`Checking number: ${numbers[i]}, complement: ${complement}`);
        if (objectOfNumbers[complement] !== undefined) {
            // console.log(`Found pair: [${objectOfNumbers[numbers[i]]}, ${i}]`);
            return [objectOfNumbers[complement], i];
        }
        else {
            objectOfNumbers[numbers[i]] = i;
        }
    }
    // console.log("No pair found.");
    return [];
}
// Runtime 63 ms / Memory 51.96 mb
console.log(twoSum([234, 21, 53, 56, 3, 2, 1], 3));
