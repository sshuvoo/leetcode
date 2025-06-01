/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  const n = nums.length
  let sum = ((n - 1) * n) / 2
  for (let i = 0; i < n; i++) sum -= nums[i]
  return Math.abs(sum)
}
// @lc code=end
