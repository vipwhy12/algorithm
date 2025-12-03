/**
 * Daily Temperatures.ts
 * https://leetcode.com/problems/daily-temperatures/description/
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = i - prevIndex;
    }

    stack.push(i);
  }

  return result;
}
