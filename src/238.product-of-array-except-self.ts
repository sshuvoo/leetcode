/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length
  const answer: number[] = []
  let prefix = 1
  for (let i = 0; i < n; i++) {
    answer.push(prefix)
    prefix *= nums[i]
  }
  let suffix = 1
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix
    suffix *= nums[i]
  }
  return answer
}
// @lc code=end
