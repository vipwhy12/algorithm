/**
 * two_sum.ts
 * https://leetcode.com/problems/two-sum/description/
 */

function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const need = target - val;

    if (seen.has(need)) return [seen.get(need)!, i];

    seen.set(val, i);
  }

  return [];
}
