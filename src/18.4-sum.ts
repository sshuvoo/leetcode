/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */

// @lc code=start
// https://github.com/sshuvoo
function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const quadruplets: number[][] = []
  for (let i = 0; i < n; i++) {
    // avoid dup for 1st num
    if (i > 0 && nums[i - 1] == nums[i]) continue
    for (let j = i + 1; j < n; j++) {
      // avoid dup for 2nd num
      if (j > i + 1 && nums[j - 1] == nums[j]) continue
      let lp = j + 1, rp = n - 1
      while (lp < rp) {
        // avoid dup for 3rd num
        if (lp > j + 1 && nums[lp - 1] == nums[lp]) {
          lp++
          continue
        }
        // avoid dup for 3rd num
        if (rp < n - 1 && nums[rp] == nums[rp + 1]) {
          rp--
          continue
        }
        const sum = nums[i] + nums[j] + nums[lp] + nums[rp]
        if (sum == target) {
          quadruplets.push([nums[i], nums[j], nums[lp], nums[rp]])
          lp++
          rp--
        } else if (sum > target) rp--
        else lp++
      }
    }
  }
  return quadruplets
}
// https://github.com/sshuvoo
// @lc code=end
