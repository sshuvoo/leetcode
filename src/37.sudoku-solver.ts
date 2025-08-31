/*
 * @lc app=leetcode id=37 lang=typescript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
type num = number
type bool = boolean
type str = string

function isSafeDigit(board: str[][], d: str, r: num, c: num): bool {
  // check the row
  for (let j = 0; j < 9; j++) {
    if (board[r][j] == d) return false
  }
  // check the colums
  for (let i = 0; i < 9; i++) {
    if (board[i][c] == d) return false
  }
  // check in the 3x3 box
  r = 3 * Math.floor(r / 3)
  c = 3 * Math.floor(c / 3)
  for (let i = r; i < r + 3; i++) {
    for (let j = c; j < c + 3; j++) {
      if (board[i][j] == d) return false
    }
  }
  return true
}

function solveSudoku(board: str[][]): void {
  function inspect(r: number, c: number): bool {
    if (c == 9) {
      c = 0
      r++
    }
    if (r == 9) return true
    const cv = board[r][c]

    if (cv != '.') {
      return inspect(r, c + 1)
    }

    for (let i = 1; i <= 9; i++) {
      const d = i.toString()
      if (isSafeDigit(board, d, r, c)) {
        board[r][c] = d
        if (inspect(r, c + 1)) {
          return true
        }
        board[r][c] = '.'
      }
    }
    return false
  }
  inspect(0, 0)
}
// @lc code=end
