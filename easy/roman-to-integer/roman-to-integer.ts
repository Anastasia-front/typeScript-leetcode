/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s: string) {
  const compliance: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let prev: number = 0;
  let current: number=0;
  let result: number = 0;
  const reverted: string = s.split("").reverse().join("");

  for (let i = 0; i < reverted.length; i++) {
    current = compliance[reverted[i]];
    if (current < prev) {
      result -= current;
    } else {
      result += current;
    }

    prev = current;
  }

  return result;
};

// Runtime 117 ms / Memory 55.37 mb
console.log(romanToInt("MXCLIV"));
