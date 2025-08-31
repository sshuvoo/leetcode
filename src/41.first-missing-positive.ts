/*
 * @lc app=leetcode id=41 lang=typescript
 *
 * [41] First Missing Positive
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
  const n = nums.length
  let i = 0
  while (i < n) {
    const idx = nums[i] - 1
    if (0 <= idx && idx < n && idx != i && nums[i] != nums[idx]) {
      const temp = nums[i]
      nums[i] = nums[idx]
      nums[idx] = temp
    } else i++
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) return i + 1
  }
  return n + 1
}
// console.log(firstMissingPositive([-1,1,3,4]))
// @lc code=end
