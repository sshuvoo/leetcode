/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
// https://github.com/sshuvoo
function isValidSudoku(board: string[][]): boolean {
  const dpC = new Array<boolean>(9).fill(false)
  const dpR = new Array<boolean>(9).fill(false)
  const dpS = Array.from({ length: 3 }, () => new Array<boolean>(3).fill(false))
  const set = new Set<string>()
  let col = 0,
    row = 0
  while (col < 9 && row < 9) {
    // Cheak if the row is valid
    if (!dpR[row]) {
      for (let j = 0; j < 9; j++) {
        const cell = board[row][j]
        if (set.has(cell)) {
          return false
        }
        if (cell != '.') {
          set.add(cell)
        }
      }
      dpR[row] = true
      set.clear()
    }
    // check if the col is valid
    if (!dpC[col]) {
      for (let i = 0; i < 9; i++) {
        const cell = board[i][col]
        if (set.has(cell)) {
          return false
        }
        if (cell != '.') {
          set.add(cell)
        }
      }
      dpC[col] = true
      set.clear()
    }

    // check the 3x3 box
    const boxRow = 3 * Math.floor(row / 3) // 0, 3, 6
    const boxCol = 3 * Math.floor(col / 3)

    if (!dpS[boxRow / 3][boxCol / 3]) {
      for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
          const cell = board[i][j]
          if (set.has(cell)) {
            return false
          }
          if (cell != '.') {
            set.add(cell)
          }
        }
      }
      dpS[boxRow / 3][boxCol / 3] = true
      set.clear()
    }
    if (col < 8) {
      col++
    } else {
      col = 0
      row++
    }
  }
  return true
}
// https://github.com/sshuvoo
// @lc code=end
