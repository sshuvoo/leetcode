/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + 1
    digits[i] = sum % 10
    if (sum < 10) return digits
  }
  digits.unshift(1)
  return digits
}
// @lc code=end
