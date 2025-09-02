/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
// https://github.com/sshuvoo
function rotate(matrix: number[][]): void {
  let tl = 0, br = matrix.length - 1 // top left, bottom-right
  while (tl < br) {
    for (let i = tl; i < br; i++) {
      const tempTR = matrix[i][br] // temp top right
      matrix[i][br] = matrix[tl][i]

      const tempBR = matrix[br][br + tl - i]
      matrix[br][br + tl - i] = tempTR

      const tempBL = matrix[br + tl - i][tl]
      matrix[br + tl - i][tl] = tempBR

      matrix[tl][i] = tempBL
    }
    // move to inner edge
    tl++
    br--
  }
}
// https://github.com/sshuvoo
// @lc code=end
