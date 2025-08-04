/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
// https://leetcode.com/u/sshuvoo/
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const triplets: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] == nums[i]) continue
    const target = -nums[i]
    let lp = i + 1, rp = nums.length - 1
    while (lp < rp) {
      // avoid duplicate
      if (lp > i + 1 && nums[lp - 1] == nums[lp]) {
        lp++
        continue
      }
      // avoid duplicate
      if (rp < nums.length - 1 && nums[rp] == nums[rp + 1]) {
        rp--
        continue
      }
      const sum = nums[lp] + nums[rp]
      if (sum == target) {
        triplets.push([-target, nums[lp], nums[rp]])
        lp++
        rp--
      } else if (sum > target) rp--
      else lp++
    }
  }
  return triplets
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// https://leetcode.com/u/sshuvoo/
// @lc code=end
