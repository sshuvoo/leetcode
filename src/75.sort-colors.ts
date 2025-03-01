/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// https://github.com/sshuvoo
function swap(nums: number[], i1: number, i2: number) {
  ;[nums[i1], nums[i2]] = [nums[i2], nums[i1]]
}
function sortColors(nums: number[]): void {
  let lp = 0, mp = 0, rp = nums.length - 1
  while (mp <= rp) {
    if (nums[mp] === 0) swap(nums, lp++, mp++)
    else if (nums[mp] === 1) mp++
    else if (nums[mp] === 2) swap(nums, mp, rp--)
  }
}
// https://github.com/sshuvoo
// @lc code=end
