/*
 * @lc app=leetcode id=695 lang=typescript
 *
 * [695] Max Area of Island
 */

// @lc code=start
// https://github.com/sshuvoo
function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length, n = grid[0].length
  function dfs(r: number, c: number): number {
    if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] == 0) {
      return 0
    }
    grid[r][c] = 0
    const top = dfs(r - 1, c)
    const bottom = dfs(r + 1, c)
    const left = dfs(r, c - 1)
    const right = dfs(r, c + 1)
    return top + bottom + left + right + 1
  }
  let maxArea = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        maxArea = Math.max(maxArea, dfs(i, j))
      }
    }
  }
  return maxArea
}
// https://github.com/sshuvoo
// @lc code=end
