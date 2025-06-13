/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */

// @lc code=start
type IBoard = ('.' | 'Q')[][]
type int = number
type bool = boolean

function isSafe(board: IBoard, row: int, col: int, n: int): bool {
  // Vertical
  for (let i = 0; i < row; i++) {
    if (board[i][col] == 'Q') return false
  }

  // primary diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] == 'Q') return false
  }

  // secondary diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] == 'Q') return false
  }

  return true
}

function solveNQueens(n: number): string[][] {
  const solution: string[][] = []
  const board: IBoard = Array.from({ length: n }, () => Array(n).fill('.'))
  function backtrack(row: number) {
    if (row == n) {
      solution.push(board.map((item) => item.join('')))
      return
    }
    for (let j = 0; j < n; j++) {
      if (isSafe(board, row, j, n)) {
        board[row][j] = 'Q'
        backtrack(row + 1)
        board[row][j] = '.'
      }
    }
  }
  backtrack(0)
  return solution
}
// @lc code=end
