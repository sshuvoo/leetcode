/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false
  const freq = new Array<number>(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    // 97 = "a"
    freq[s.charCodeAt(i) - 97]++
    freq[t.charCodeAt(i) - 97]--
  }
  return freq.every((val) => val == 0)
}
// @lc code=end
