/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const hashTable = new Map<number, number>()
  for (const num of nums) {
    if (hashTable.get(num) === 1) return true
    else hashTable.set(num, 1)
  }
  return false
}
// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo
// @lc code=end
