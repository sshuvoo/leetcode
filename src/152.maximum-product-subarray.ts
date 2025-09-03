/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  const n = nums.length
  let ans = nums[0], min = nums[0], max = nums[0]
  for (let i = 1; i < n; i++) {
    if (nums[i] < 0) {
      const temp = min
      min = max
      max = temp
    }
    min = Math.min(nums[i], min * nums[i])
    max = Math.max(nums[i], max * nums[i])
    ans = Math.max(ans, max)
  }
  return ans
}
// Input: nums = [2,3,-2,4]
// Output: 6
// @lc code=end
