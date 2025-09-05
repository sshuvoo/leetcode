/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  const n = columnTitle.length
  let column = 0
  for (let i = 0; i < n; i++) {
    column += (columnTitle[i].charCodeAt(0) - 64) * 26 ** (n - i - 1)
  }
  return column
}
/// AAA = 1*(26)^2 + 1 * 26 + 1
// @lc code=end
