/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
// https://github.com/
function reverseWords(s: string): string {
  let reverse = ''
  let word = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (word !== '') {
        reverse = reverse !== '' ? word + ' ' + reverse : word
      }
      word = ''
    } else {
      word += s[i]
    }
  }
  if (word !== '') {
    reverse = reverse !== '' ? word + ' ' + reverse : word
  }
  return reverse
}
// https://github.com/
// @lc code=end
