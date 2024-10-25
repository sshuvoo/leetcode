/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const map = new Map<number, number>()
  let i = 0
  while (i < nums.length) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i])! + 1)
    } else map.set(nums[i], 1)
    i++
  }
  let major: number
  map.forEach((v, k) => {
    if (v > nums.length / 2) {
      major = k
    }
  })
  return major
}
// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo
// @lc code=end
