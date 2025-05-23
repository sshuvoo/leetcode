/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (hashMap.has(complement)) {
      return [i, hashMap.get(complement)!]
    }
    hashMap.set(nums[i], i)
  }
  return []
}
// @lc code=end
