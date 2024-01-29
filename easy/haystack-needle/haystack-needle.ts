function strStr(haystack: string, needle: string): number {
  const lengthHaystack: number = haystack.length;
  const lengthNeedle: number = needle.length;
  const difference: number = lengthHaystack - lengthNeedle;

  if (lengthNeedle === 0) {
    return -1;
  }

  for (let index = 0; index < difference + 1; index++) {
    if (haystack.slice(index, index + lengthNeedle) === needle) {
      return index;
    }
  }

  return -1;
}

// Runtime 60 ms / Memory 51.79 mb

const res = strStr("sadbutsad", "sad");
console.log(res);

const res1 = strStr("leetcode", "leeto");
console.log(res1);

const res2 = strStr("hello", "ll");
console.log(res2);

const res3 = strStr("mississippi", "issip");
console.log(res3);
