/*
 * @lc app=leetcode id=37 lang=typescript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
type str = string
type num = number
type bool = boolean

function isValidDigit(board: str[][], digit: str, row: num, col: num): bool {
  // check the row
  for (let j = 0; j <= 8; j++) {
    if (board[row][j] == digit) return false
  }
  // check the column
  for (let i = 0; i <= 8; i++) {
    if (board[i][col] == digit) return false
  }
  // check the 3x3 square
  row = Math.floor(row / 3) * 3
  col = Math.floor(col / 3) * 3

  for (let i = row; i <= row + 2; i++) {
    for (let j = col; j <= col + 2; j++) {
      if (board[i][j] == digit) return false
    }
  }
  return true
}
function solveSudoku(board: str[][]): void {
  function inspectCell(row: num, col: num): bool {
    if (col == 9) {
      row++
      col = 0
    }
    if (row == 9) return true

    if (board[row][col] != '.') {
      return inspectCell(row, col + 1)
    } else {
      for (let d = 1; d <= 9; d++) {
        const digit = d.toString()
        if (isValidDigit(board, digit, row, col)) {
          board[row][col] = digit
          const isSuccess = inspectCell(row, col + 1)
          if (isSuccess) return true
          board[row][col] = '.'
        }
      }
      return false
    }
  }
  inspectCell(0, 0)
}
// @lc code=end
