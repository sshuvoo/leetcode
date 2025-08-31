/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const ans: number[] = []
  for (const num of nums) {
    const index = Math.abs(num) - 1
    if (nums[index] > 0) {
      nums[index] = -nums[index]
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) ans.push(i + 1)
  }
  return ans
}
// Input: nums = [-4,-3,-2,-7,8,2,-3,-1]
// Output: [4+1,5+1]
// @lc code=end
