/*
 * @lc app=leetcode id=2596 lang=typescript
 *
 * [2596] Check Knight Tour Configuration
 */

// @lc code=start
// https://leetcode.com/u/sshuvoo/
// https://github.com/sshuvoo
type num = number
type bool = boolean

function checkValidGrid(grid: num[][]): bool {
  function moveTo(row: num, col: num, val: num): bool {
    const n = grid.length
    if (row < 0 || col < 0 || row >= n || col >= n) return false
    if (val == n * n) return true
    if (grid[row][col] != val) return false

    const topR = moveTo(row - 2, col + 1, val + 1)
    const topL = moveTo(row - 2, col - 1, val + 1)

    const rightT = moveTo(row - 1, col + 2, val + 1)
    const rightB = moveTo(row + 1, col + 2, val + 1)

    const bottomR = moveTo(row + 2, col + 1, val + 1)
    const bottomL = moveTo(row + 2, col - 1, val + 1)

    const leftT = moveTo(row - 1, col - 2, val + 1)
    const leftB = moveTo(row + 1, col - 2, val + 1)

    return (
      topR || topL || rightT || rightB || bottomR || bottomL || leftT || leftB
    )
  }
  return moveTo(0, 0, 0)
}
// @lc code=end
