/*
 * @lc app=leetcode id=240 lang=typescript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let rp = 0, cp = matrix[0].length - 1
  while (rp < matrix.length && cp >= 0) {
    const mid = matrix[rp][cp]
    if (mid === target) return true
    else if (target < mid) cp--
    else rp++
  }
  return false
}
// @lc code=end
