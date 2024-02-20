"use strict";
function lengthOfLastWord(s) {
    const lastWord = s.trim().split(" ")[s.trim().split(" ").length - 1];
    return Number(lastWord.length);
}
// Runtime 54 ms / Memory 51.19 mb
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("fluffy is still boy"));
