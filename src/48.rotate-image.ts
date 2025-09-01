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
  let tl = 0, br = matrix.length - 1
  while (tl < br) {
    for (let i = tl; i < br; i++) {
      const trVal = matrix[i][br] // 8
      matrix[i][br] = matrix[tl][i] //4

      const brVal = matrix[br][br + tl - i]
      matrix[br][br + tl - i] = trVal

      const blVal = matrix[br + tl - i][tl]
      matrix[br + tl - i][tl] = brVal

      matrix[tl][i] = blVal
    }
    tl++
    br--
  }
}
// https://github.com/sshuvoo
// @lc code=end
