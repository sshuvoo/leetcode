/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
// https://github.com/sshuvoo
function maxSubArray(nums: number[]): number {
  let maxSum = -Infinity
  let currSum = 0
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i]
    maxSum = Math.max(maxSum, currSum)
    if (currSum < 0) currSum = 0
  }
  return maxSum
}
// https://github.com/sshuvoo
// @lc code=end
