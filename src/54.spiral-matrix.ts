/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []
  let sr = 0, er = matrix.length - 1, sc = 0, ec = matrix[0].length - 1
  while (sr <= er && sc <= ec) {
    for (let i = sc; i <= ec; i++) result.push(matrix[sr][i])
    for (let i = sr + 1; i <= er; i++) result.push(matrix[i][ec])
    if (sr !== er) {
      for (let i = ec - 1; sc <= i; i--) result.push(matrix[er][i])
    }
    if (sc !== ec) {
      for (let i = er - 1; sr < i; i--) result.push(matrix[i][sc])
    }
    sr++; er--; sc++; ec--
  }
  return result
}
// @lc code=end
