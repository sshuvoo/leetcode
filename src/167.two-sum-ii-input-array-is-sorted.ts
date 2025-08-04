/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
// https://github.com/sshuvoo
function twoSum(numbers: number[], target: number): number[] {
  let lp = 0, rp = numbers.length - 1
  while (lp < rp) {
    const sum = numbers[lp] + numbers[rp]
    if (sum == target) break
    if (sum > target) rp--
    else lp++
  }
  return [lp + 1, rp + 1]
}
// https://github.com/sshuvoo
// @lc code=end
