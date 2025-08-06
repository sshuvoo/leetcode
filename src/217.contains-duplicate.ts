/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
// https://github.com/sshuvoo
function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>()
  for (const num of nums) {
    if (set.has(num)) return true
    else set.add(num)
  }
  return false
}
// https://github.com/sshuvoo
// @lc code=end
