function merge(
  numbers1: number[],
  m: number,
  numbers2: number[],
  n: number
): void {
  let p1: number = m - 1;
  let p2: number = n - 1;
  let p: number = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (numbers1[p1] > numbers2[p2]) {
      numbers1[p] = numbers1[p1];
      p1 -= 1;
    } else {
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

let numbers1: number[] = [1, 2, 3, 0, 0, 0];
let m: number = 3;
let numbers2: number[] = [2, 5, 6];
let n: number = 3;

merge(numbers1, m, numbers2, n);
console.log(numbers1);
