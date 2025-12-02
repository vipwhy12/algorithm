/**
 * two_sum.ts
 * https://leetcode.com/problems/two-sum/description/
 */

function isValid(s) {
  const stack = [...s];
  const max = stack.length;
  const last = [];

  for (let i = 0; i < max; i++) {
    const c = stack.pop();
    const lastIndex = last.length - 1;

    if (c === "(" && last[lastIndex] === ")") {
      last.pop();
    } else if (c === "[" && last[lastIndex] === "]") {
      last.pop();
    } else if (c === "{" && last[lastIndex] === "}") {
      last.pop();
    } else {
      last.push(c);
    }
  }

  if (last.length === 0) {
    return true;
  }

  return false;
}
