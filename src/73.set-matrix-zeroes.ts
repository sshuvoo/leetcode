/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * `[73] Set Matrix Zeroes`
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const n = matrix.length, m = matrix[0].length
  const rows = new Set<number>()
  const cols = new Set<number>()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
}
// setZeroes([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ])
// @lc code=end
