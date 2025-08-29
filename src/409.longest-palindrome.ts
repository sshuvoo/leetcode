/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
// https://github.com/sshuvoo
function longestPalindrome(s: string): number {
  const set = new Set<string>()
  let maxlen = 0
  for (const char of s) {
    if (set.has(char)) {
      set.delete(char)
      maxlen += 2
    } else set.add(char)
  }
  if (set.size > 0) maxlen++
  return maxlen
}
// https://github.com/sshuvoo
// @lc code=end
