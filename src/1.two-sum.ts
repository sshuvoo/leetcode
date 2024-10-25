/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const hashmap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    if (hashmap.has(target - nums[i])) {
      return [hashmap.get(target - nums[i])!, i]
    }
    hashmap.set(nums[i], i)
  }
  return []
}
// [2,7,11,15] 9
// @lc code=end
