/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let lp = 0, rp = numbers.length - 1
  while (lp < rp) {
    if (numbers[lp] + numbers[rp] == target) break
    if (numbers[lp] + numbers[rp] > target) rp--
    else lp++
  }
  return [lp + 1, rp + 1]
}
// @lc code=end
