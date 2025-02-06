/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  const length = nums.length
  if (length === 1) return true
  let goalIndex = length - 1
  for (let i = length - 2; i >= 0; i--) {
    if (nums[i] + i >= goalIndex) {
      goalIndex = i
    }
  }
  return goalIndex === 0
}
// https://github.com/sshuvoo
// @lc code=end
