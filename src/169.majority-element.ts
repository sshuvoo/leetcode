/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
// https://github.com/sshuvoo
function majorityElement(nums: number[]): number {
  // moore's voting algorithm
  let freq = 0, ans = 0
  for (const num of nums) {
    if (freq === 0) ans = num
    freq += ans === num ? 1 : -1
  }
  return ans
}
// https://github.com/sshuvoo
// @lc code=end
