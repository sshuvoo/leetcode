/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums.sort()
  const ans: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    let j = i + 1, k = nums.length - 1
    while (j < k) {
      let x = nums[i], y = nums[j], z = nums[k]
      const sum = x + y + z
      if (sum === 0) {
        ans.push([x, y, z])
        break
      }
      else if (sum < 0) j++
      else k--
    }
  }
  return ans
}
// [-1,0,1,2,-1,-4]
// @lc code=end
