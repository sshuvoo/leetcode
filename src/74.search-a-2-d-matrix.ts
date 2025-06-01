/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let p1 = 0, p2 = matrix.length - 1
  while (p1 <= p2) {
    const mid = Math.floor((p1 + p2) / 2)
    const row = matrix[mid]
    if (row[0] <= target && target <= row[row.length - 1]) {
      // binary search in this row
      let p3 = 0, p4 = row.length - 1
      while (p3 <= p4) {
        const mid2 = Math.floor((p3 + p4) / 2)
        if (row[mid2] === target) return true
        else if (row[mid2] < target) p3 = mid2 + 1
        else p4 = mid2 - 1
      }
      return false
    } else if (target < row[0]) p2 = mid - 1
    else p1 = mid + 1
  }
  return false
}
// @lc code=end
