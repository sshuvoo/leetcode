/*
 * @lc app=leetcode id=85 lang=typescript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
// https://github.com/sshuvoo
function getMaxArea(h: number[]): number {
  let a = 0 // max area
  const n = h.length
  const ns: number[] = [] // next smaller
  const ps: number[] = [] // prev smaller
  const s: number[] = [] // stack
  for (let i = 0; i < n; i++) {
    while (s.length > 0 && h[i] <= h[s[s.length - 1]]) {
      s.pop()
    }
    ps[i] = s.length > 0 ? s[s.length - 1] : -1
    s.push(i)
  }
  s.length = 0
  for (let i = n - 1; i >= 0; i--) {
    while (s.length > 0 && h[i] <= h[s[s.length - 1]]) {
      s.pop()
    }
    ns[i] = s.length > 0 ? s[s.length - 1] : n
    s.push(i)
  }
  for (let i = 0; i < n; i++) {
    const width = ns[i] - ps[i] - 1
    a = Math.max(a, width * h[i])
  }
  return a
}

function maximalRectangle(matrix: string[][]): number {
  let maxArea = 0
  const row = new Array<number>(matrix[0].length).fill(0)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      row[j] = matrix[i][j] == '0' ? 0 : row[j] + 1
    }
    maxArea = Math.max(maxArea, getMaxArea(row))
  }
  return maxArea
}
// https://github.com/sshuvoo
// @lc code=end
