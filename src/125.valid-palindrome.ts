/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isAlphanumeric(char: string) {
  const lowerChar = char.toLowerCase()
  const code = lowerChar.charCodeAt(0)
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
}

function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++
      continue
    }
    if (!isAlphanumeric(s[right])) {
      right--
      continue
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    left++
    right--
  }
  return true
}
// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo
// @lc code=end
