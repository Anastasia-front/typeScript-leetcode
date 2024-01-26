"use strict";
function removeDuplicates(numbers) {
    let slow = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[slow] !== numbers[i]) {
            slow++;
            numbers[slow] = numbers[i];
        }
    }
    return slow + 1;
}
// Runtime 76 ms / Memory 52.74 mb
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
console.log(`Output: ${k1}, nums = ${Array(nums1.slice(0, k1))}`);
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
console.log(`Output: ${k2}, nums = ${Array(nums2.slice(0, k2))}`);
const nums3 = [1, 1, 1, 1, 1, 2];
const k3 = removeDuplicates(nums2);
console.log(`Output: ${k3}, nums = ${Array(nums3.slice(0, k3))}`);
