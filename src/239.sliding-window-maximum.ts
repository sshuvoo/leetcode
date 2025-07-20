/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (i + k <= nums.length) {
      let max = nums[i]
      for (let j = i; j < i + k; j++) {
        max = Math.max(max, nums[j])
      }
      res.push(max)
    }
  }
  return res
}
// @lc code=end
