/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
// https://github.com/sshuvoo
function productExceptSelf(nums: number[]): number[] {
  const prefix: number[] = [1]
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1]
  }
  let suffix: number = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix *= nums[i + 1]
    prefix[i] *= suffix
  }
  return prefix
}
// https://github.com/sshuvoo
// @lc code=end
