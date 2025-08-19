/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
// https://github.com/sshuvoo
function multiply(num1: string, num2: string): string {
  const result: number[] = Array(num1.length + num2.length).fill(0)
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const multiply = parseInt(num1[i]) * parseInt(num2[j])
      const sum = result[i + j + 1] + multiply
      result[i + j + 1] = sum % 10
      result[i + j] += Math.floor(sum / 10)
    }
  }
  let lp = 0
  for (const digit of result) {
    if (digit != 0) break
    lp++
  }
  const res = result.slice(lp).join('')
  return res == '' ? '0' : res
}
// https://github.com/sshuvoo
// @lc code=end

// Input: num1 = "123", num2 = "456"
// Output: "056088"
