/*
 * @lc app=leetcode id=2894 lang=typescript
 *
 * [2894] Divisible and Non-divisible Sums Difference
 */

// @lc code=start
function differenceOfSums(n: number, m: number): number {
  let num1 = 0, num2 = 0
  for (let i = 1; i <= n; i++) {
    if (i % m == 0) num1 += i
    else num2 += i
  }
  return num2 - num1
}
// @lc code=end
