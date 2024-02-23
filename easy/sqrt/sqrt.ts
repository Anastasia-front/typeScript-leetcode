function mySqrt(x: number): number {
  if (x === 1 || x === 1) {
    return x;
  }

  let left: number = 1;
  let right: number = x;
  let result: number = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// Runtime 72 ms / Memory 53.82 mb

console.log(mySqrt(4));
console.log(mySqrt(8));
