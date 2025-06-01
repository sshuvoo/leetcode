/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isAlphanumeric(char: string) {
  if (
    ('0' <= char && char <= '9') ||
    ('a' <= char && char <= 'z') ||
    ('A' <= char && char <= 'Z')
  )
    return true
  return false
}

function isPalindrome(s: string): boolean {
  let lp = 0, rp = s.length - 1
  while (lp < rp) {
    if (!isAlphanumeric(s[lp])) {
      lp++
      continue
    }
    if (!isAlphanumeric(s[rp])) {
      rp--
      continue
    }
    if (s[lp].toLowerCase() !== s[rp].toLowerCase()) return false
    lp++
    rp--
  }
  return true
}
// https://github.com/sshuvoo
// @lc code=end
