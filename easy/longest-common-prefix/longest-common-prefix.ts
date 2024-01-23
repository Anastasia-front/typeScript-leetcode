function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) {
    return "";
  }

  const minLength: number = Math.min(...strings.map((s) => s.length));

  for (let i = 0; i < minLength; i++) {
    if (!strings.every((s) => s[i] === strings[0][i])) {
      return strings[0].substring(0, i);
    }
  }
  return strings[0].substring(0, minLength);
}

// Runtime 64 ms / Memory 52.03 mb

console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))