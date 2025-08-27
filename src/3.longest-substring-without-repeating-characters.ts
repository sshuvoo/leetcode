/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
// https://github.com/sshuvoo
function lengthOfLongestSubstring(s: string): number {
  const n = s.length
  const m = new Map<string, number>()
  let maxLen = 0
  let lp = 0, rp = 0
  while (rp < n) {
    if (m.has(s[rp])) {
      const idx = m.get(s[rp])!
      while (lp <= idx) {
        m.delete(s[lp++])
      }
    }
    m.set(s[rp], rp)
    maxLen = Math.max(maxLen, rp++ - lp + 1)
  }
  return maxLen
}
// https://github.com/sshuvoo
// @lc code=end

// Input: s = "abcabcbb"
// Output: 3
