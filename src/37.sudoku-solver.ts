/*
 * @lc app=leetcode id=37 lang=typescript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function getPerfectDigit(board: string[][], row: number, col: number): string {
    // check column
    for(let d=0; d<=9; d++){
      const char = d.toString()
      
    }
}
function solveSudoku(board: string[][]): void {
  function backtrack(row: number) {
    if (row == 9) return

    for (let j = 0; j < 9; j++) {
      if (board[row][j] == '.') {
        board[row][j] == getPerfectDigit(board, row, j)
        backtrack(row + 1)
        board[row][j] == '.'
      }
    }
  }
  backtrack(0)
}
// @lc code=end
