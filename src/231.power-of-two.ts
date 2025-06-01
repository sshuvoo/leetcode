/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  if (n < 1) return false
  if (n == 1) return true
  if (n % 2 === 0) {
    return isPowerOfTwo(n / 2)
  }
  return false
}
// @lc code=end

// isPowerOfTwo(5)
