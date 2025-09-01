/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
// https://github.com/sshuvoo
function spiralOrder(matrix: number[][]): number[] {
  let l = 0, r = matrix[0].length - 1
  let t = 0, b = matrix.length - 1
  const ans: number[] = []

  while (l <= r && t <= b) {
    // top row
    for (let j = l; j <= r; j++) {
      ans.push(matrix[t][j])
    }
    t++

    // right col
    for (let i = t; i <= b; i++) {
      ans.push(matrix[i][r])
    }
    r--

    // bottom row
    if (t <= b) {
      for (let j = r; j >= l; j--) {
        ans.push(matrix[b][j])
      }
      b--
    }

    // left col
    if (l <= r) {
      for (let i = b; i >= t; i--) [ans.push(matrix[i][l])]
      l++
    }
  }

  return ans
}

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// ;[
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ]
// l = 1, r = 2, t = 2, b = 1
// 1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7,

// @lc code=end
