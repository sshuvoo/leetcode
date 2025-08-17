/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = carry + digits[i]
    digits[i] = sum % 10
    if (sum <= 9) return digits
    carry = Math.floor(sum / 10)
  }
  if (carry > 0) digits.unshift(carry)
  return digits
}
// @lc code=end
