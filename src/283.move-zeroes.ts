/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (nums[left] !== 0) {
      left++
      continue
    }
    nums[left] = nums[right]
    nums[right] = 0
    left++
    right--
  }
}
const nums = [0, 1, 0, 3, 0, 12]    1 0 0 3 12 0    
moveZeroes(nums)
console.log(nums)
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// @lc code=end
