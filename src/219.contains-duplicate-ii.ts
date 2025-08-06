/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
// https://github.com/sshuvoo
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i])! <= k) {
      return true
    }
    map.set(nums[i], i)
  }
  return false
}
// https://github.com/sshuvoo
// @lc code=end
