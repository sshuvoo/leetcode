/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
// Brute force
// function isHappy(n: number): boolean {
//   const set = new Set<number>()
//   function dfs(num: number) {
//     let sum = 0
//     while (num > 0) {
//       sum += (num % 10) ** 2
//       num = Math.floor(num / 10)
//     }
//     if (sum == 1) return true
//     else if (set.has(sum)) return false
//     else {
//       set.add(sum)
//       return dfs(sum)
//     }
//   }
//   return dfs(n)
// }
// Optimal (Floyd's cycle detection)
function nPointer(n: number): number {
  // next pointer
  let sum = 0
  while (n > 0) {
    sum += (n % 10) ** 2
    n = Math.floor(n / 10)
  }
  return sum
}

function isHappy(n: number): boolean {
  let slow = n, fast = n
  while (true) {
    slow = nPointer(slow)
    if (slow == 1) return true
    fast = nPointer(nPointer(fast))
    if (slow == fast) return false
  }
}
// @lc code=end
