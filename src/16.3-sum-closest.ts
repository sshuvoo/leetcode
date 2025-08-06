/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let closest: number = Infinity
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] == nums[i]) continue
    let lp = i + 1, rp = nums.length - 1
    while (lp < rp) {
      const sum = nums[i] + nums[lp] + nums[rp]
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum
      } else if (sum < target) lp++
      else if (sum > target) rp--
      else return sum
    }
  }
  return closest
}
// [-1, 2, 1, -4] 1
// @lc code=end
