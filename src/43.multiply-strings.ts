/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
// https://github.com/sshuvoo
function multiply(num1: string, num2: string): string {
  if (num1 == '0' || num2 == '0') return '0'
  const n = num1.length, m = num2.length
  const result = new Array<number>(n + m).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const multiply = parseInt(num1[i]) * parseInt(num2[j])
      const sum = result[i + j + 1] + multiply
      result[i + j + 1] = sum % 10
      result[i + j] += Math.floor(sum / 10)
    }
  }
  let sliceIdx = 0
  for (const digit of result) {
    if (digit != 0) break
    sliceIdx++
  }
  return result.slice(sliceIdx).join('')
}
// https://github.com/sshuvoo
// @lc code=end

// Input: num1 = "123", num2 = "456"
// Output: "056088"
