/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const hashmap = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    hashmap.set(s[i], (hashmap.get(s[i]) || 0) + 1)
    hashmap.set(t[i], (hashmap.get(t[i]) || 0) - 1)
  }
  for (const entry of hashmap.values()) {
    if (entry !== 0) return false
  }
  return true
}
// Input: s = "anagram", t = "nagaram"
// @lc code=end
