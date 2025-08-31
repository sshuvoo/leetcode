/*
 * @lc app=leetcode id=442 lang=typescript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
// https://github.com/sshuvoo
function findDuplicates(nums: number[]): number[] {
  const ans: number[] = []
  for (const num of nums) {
    const abs = Math.abs(num)
    const val = nums[abs - 1]
    if (val < 0) ans.push(abs)
    else nums[abs - 1] = -val
  }
  return ans
}
// https://github.com/sshuvoo
// Input: nums = [4,3,-2,-7,8,2,3,1]
// Output: [2,3]
// @lc code=end
