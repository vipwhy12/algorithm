/**
 * two_sum.ts
 * https://leetcode.com/problems/two-sum/description/
 */

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const indexTarget = target - nums[i];
    const findIndex = nums.indexOf(indexTarget, i + 1);
    if (findIndex > -1) {
      return [i, findIndex];
    }
  }
  return [];
}
