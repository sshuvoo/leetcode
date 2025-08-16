/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  const set = new Set<number>()
  function dfs(num: number) {
    let sum = 0
    while (num > 0) {
      sum += (num % 10) ** 2
      num = Math.floor(num / 10)
    }
    if (sum == 1) return true
    else if (set.has(sum)) return false
    else {
      set.add(sum)
      return dfs(sum)
    }
  }
  return dfs(n)
}
// @lc code=end
