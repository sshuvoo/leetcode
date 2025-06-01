/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function findMax(nums: number[], start: number, end: number) {
  let max = nums[start]
  let maxIndex = start
  for (let i = start + 1; i <= end; i++) {
    maxIndex = max > nums[i] ? maxIndex : i
    max = Math.max(max, nums[i])
  }

  return max > end ? maxIndex : end
}
function jump(nums: number[]): number {
  if (nums.length === 1) return 0
  let count = 0
  let i = 0
  while (i < nums.length) {
    const maxIndex = findMax(nums, i + 1, i + nums[i])
    i = maxIndex
    count++
    if (maxIndex === nums.length - 1) return count
  }
  return count
}
// @lc code=end
