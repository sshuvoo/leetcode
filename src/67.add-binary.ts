/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let sum: string[] = []
  let carry = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let tempSum = carry
    if (i >= 0) tempSum += parseInt(a[i])
    if (j >= 0) tempSum += parseInt(b[j])
    sum.push((tempSum % 2).toString())
    carry = Math.floor(tempSum / 2)
  }
  if (carry == 1) sum.push('1')
  sum.reverse()
  return sum.join('')
}
// @lc code=end
