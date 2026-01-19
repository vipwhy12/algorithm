/**
 * Longest Consecutive Sequence.ts
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */

function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  const set = new Set(nums);
  let longetst = 0;


  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }
      longetst = Math.max(length, longetst)

    }
  }

  return longetst;

};