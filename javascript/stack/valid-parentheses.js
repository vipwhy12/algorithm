/**
 * two_sum.ts
 * https://leetcode.com/problems/two-sum/description/
 */

function isValid(s) {
  const chars = [...s];
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  while (chars.length) {
    const char = chars.pop();
    const last = stack[stack.length - 1];

    if (pairs[char] && pairs[char] === last) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
