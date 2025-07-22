/*
 * @lc app=leetcode id=1695 lang=typescript
 *
 * [1695] Maximum Erasure Value
 */

// @lc code=start
// https://github.com/sshuvoo
function maximumUniqueSubarray(nums: number[]): number {
  let sum = 0
  const map = new Map<number, number>()
  let lp = 0, rp = 0
  let tempSum = 0
  while (rp < nums.length) {
    const curr = nums[rp]
    if (map.has(curr)) {
      sum = Math.max(sum, tempSum)
      const index = map.get(curr)!
      while (lp <= index) tempSum -= nums[lp++]
    }
    map.set(curr, rp++)
    tempSum += curr
  }
  return Math.max(sum, tempSum)
}
// https://github.com/sshuvoo
// @lc code=end
