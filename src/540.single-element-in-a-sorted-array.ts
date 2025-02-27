/*
 * @lc app=leetcode id=540 lang=typescript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
// https://github.com/sshuvoo
function singleNonDuplicate(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  let lp = 0,
    rp = nums.length - 1
  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2)
    if (nums[mid - 1] !== nums[mid] && nums[mid] !== nums[mid + 1])
      return nums[mid]
    if (mid % 2 === 0) {
      if (nums[mid - 1] === nums[mid]) {
        rp = mid - 1
      } else lp = mid + 1
    } else {
      if (nums[mid - 1] === nums[mid]) {
        lp = mid + 1
      } else rp = mid - 1
    }
  }
  return -1
}
// https://github.com/sshuvoo
// @lc code=end
