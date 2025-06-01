/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
// https://github.com/sshuvoo
function search(nums: number[], target: number): number {
  let lp = 0, rp = nums.length - 1
  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2)
    if (nums[mid] === target) return mid
    if (nums[lp] <= nums[mid]) {
      // left sorted part
      if (nums[lp] <= target && target < nums[mid]) {
        rp = mid - 1
      } else lp = mid + 1
    } else {
      // right sorted part
      if (nums[mid] < target && target <= nums[rp]) {
        lp = mid + 1
      } else rp = mid - 1
    }
  }
  return -1
}
// https://github.com/sshuvoo
// @lc code=end
