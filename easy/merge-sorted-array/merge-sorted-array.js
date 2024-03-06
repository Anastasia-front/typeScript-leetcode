"use strict";
function merge(numbers1, m, numbers2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    while (p1 >= 0 && p2 >= 0) {
        if (numbers1[p1] > numbers2[p2]) {
            numbers1[p] = numbers1[p1];
            p1 -= 1;
        }
        else {
            numbers1[p] = numbers2[p2];
            p2 -= 1;
        }
        p -= 1;
    }
    while (p2 >= 0) {
        numbers1[p] = numbers2[p2];
        p2 -= 1;
        p -= 1;
    }
}
// Runtime 53 ms / Memory 51.53 mb
let numbers1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let numbers2 = [2, 5, 6];
let n = 3;
merge(numbers1, m, numbers2, n);
console.log(numbers1);
