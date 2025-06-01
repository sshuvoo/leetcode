/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      nums[i] = nums[i]
      if (nums[i] === k) count++
    } else {
      if (nums[i] === k) count++
      nums[i] = nums[i] + nums[i - 1]
      if (nums[i] === k) count++
    }
  }
  return count
}
// @lc code=end
