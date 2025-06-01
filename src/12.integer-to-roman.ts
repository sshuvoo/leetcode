/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
const symbol = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
}

function intToRoman(num: number): string {
  let roman = ''
  let multiplier = 1
  while (true) {
    const lastDigit = num % 10
    if (lastDigit * multiplier >= 1000) {
      
    }
  }
}
// 3749
// @lc code=end
