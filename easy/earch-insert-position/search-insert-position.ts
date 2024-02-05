function searchInsert(numbers: number[], target: number): number {
  if (target > numbers[numbers.length - 1]) {
    return numbers.length;
  }

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (target <= element) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
}

// Runtime 59 ms / Memory 51.81 mb

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
