function isISafe(grid: [][], row: number, col: number, i: number): boolean {
  // check horizontally
  for (let j = 0; j < col; j++) {
    if (grid[row][j] === i) return false
  }

  // check vertically
  for (let i = 0; i < row; i++) {
    if (grid[i][col] === i) return false
  }

}
function fillGrid(grid: number[][]): void {
  const n = grid.length
  function backtrack(row: number, col: number) {
    if (col === n) {
      col = 0
      row++
    }
    if (row === n) return
    if (grid[row][col] !== 0) {
    } else {
      for (let i = 1; i <= 9; i++) {
        if (isISafe(grid, row, col, i)) {
        }
      }
    }
  }
  backtrack(0, 0)
}

const grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

fillGrid(grid)

console.log(grid)

// sum(1 to n**2) / n
