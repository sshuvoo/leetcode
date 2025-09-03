/*
 * @lc app=leetcode id=713 lang=typescript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  const n = nums.length
  let lp = 0, rp = 0, prod = 1, count = 0
  while (rp < n) {
    prod *= nums[rp]
    while (prod >= k && lp <= rp) {
      prod /= nums[lp++]
    }
    count += rp++ - lp + 1
  }
  return count
}
// @lc code=end
