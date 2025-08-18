/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
// https://github.com/sshuvoo
function lengthOfLongestSubstring(s: string): number {
  const hm = new Map<string, number>()
  let length = 0
  let lp = 0, rp = 0
  for (let i = 0; i < s.length; i++) {
    if (hm.has(s[i])) {
      const index = hm.get(s[i])!
      for(let j = lp; j<=index; j++){
        hm.delete(s[j])
      }
      lp = index + 1
      hm.set(s[i], i)
    } else {
      rp = i
      hm.set(s[i], i)
      length = Math.max(length, rp - lp + 1)
    }
  }
  return length
}
// https://github.com/sshuvoo
// @lc code=end

// Input: s = "abcabcbb"
// Output: 3
