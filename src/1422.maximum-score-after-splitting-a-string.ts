/*
 * @lc app=leetcode id=1422 lang=typescript
 *
 * [1422] Maximum Score After Splitting a String
 */

// @lc code=start

// My Bruteforce lol solution
// function count(s: string, type: '0' | '1'): number {
//   let sum = 0
//   for (const char of s) {
//     if (char === type) {
//       sum++
//     }
//   }
//   return sum
// }
// function maxScore(s: string): number {
//   let score = 0
//   for (let i = 1; i < s.length; i++) {
//     const left = count(s.slice(0, i), '0')
//     const right = count(s.slice(i, s.length), '1')
//     if (left + right > score) {
//       score = left + right
//     }
//   }
//   return score
// }

// Efficient one
// function maxScore(s: string): number {
//   let score = 0
//   let ones = 0
//   let zeros = 0
//   for (const char of s) {
//     if (char === '1') ones++
//   }
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === '0') zeros++
//     else ones--
//     score = Math.max(score, zeros + ones)
//   }
//   return score
// }

// Trying One pass solution
function maxScore(s: string): number {
  let ones = 0
  let zeros = 0
  let best = -Infinity
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') zeros++
    else ones++
    best = Math.max(best, zeros - ones)
  }
  if (s[s.length - 1] === '1') ones++
  return best + ones
}
// @lc code=end

// 011101
