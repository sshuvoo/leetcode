/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
// https://github.com/sshuvoo
function myPow(x: number, n: number): number {
  // Solve with binary exponential technique
  if (n < 0) {
    // handle negative power
    n = -1 * n
    x = 1 / x
  }
  let ans = 1
  while (n > 0) {
    if (n % 2 === 1) {
      ans *= x
    }
    x *= x
    n = Math.trunc(n / 2)
  }
  return ans
}
// https://github.com/sshuvoo
// @lc code=end
