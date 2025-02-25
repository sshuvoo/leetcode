/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
// https://github.com/sshuvoo
function maxArea(height: number[]): number {
  let maxArea = 0
  let lp = 0, rp = height.length - 1
  while (lp < rp) {
    const wArea = (rp - lp) * Math.min(height[lp], height[rp])
    maxArea = Math.max(maxArea, wArea)
    height[lp] < height[rp] ? lp++ : rp--
  }
  return maxArea
}
// https://github.com/sshuvoo
// @lc code=end
