/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start

function fib(n: number): number {
  const memory = [0, 1]
  function F(n: number): number {
    if (memory[n] || memory[n] === 0) return memory[n]
    memory[n] = F(n - 1) + F(n - 2)
    return memory[n]
  }
  return F(n)
}

// @lc code=end

// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo
