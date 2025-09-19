/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
// https://github.com/sshuvoo
function numIslands(grid: ('1' | '0')[][]): number {
  const m = grid.length, n = grid[0].length
  const v = Array.from({ length: m }, () => new Array<boolean>(n).fill(false))
  function dfs(i: number, j: number) {
    const isInvalid = i < 0 || j < 0 || i >= m || j >= n
    if (isInvalid || v[i][j] || grid[i][j] == '0') {
      return
    }
    v[i][j] = true
    dfs(i - 1, j) // top
    dfs(i, j + 1) // right
    dfs(i, j - 1) // left
    dfs(i + 1, j) // botttom
  }
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!v[i][j] && grid[i][j] == '1') {
        dfs(i, j)
        count++
      }
    }
  }
  return count
}
// https://github.com/sshuvoo
// @lc code=end
