/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function isSameFreq(f1: number[], f2: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (f1[i] !== f2[i]) return false
  }
  return true
}

function checkInclusion(s1: string, s2: string): boolean {
  const s1_freq: number[] = new Array(26).fill(0)
  for (const char of s1) s1_freq[char.charCodeAt(0) - 97]++

  for (let i = 0; i < s2.length; i++) {
    const w_freq: number[] = new Array(26).fill(0)
    for (let j = i; j < i + s1.length && j < s2.length; j++) {
      w_freq[s2[j].charCodeAt(0) - 97]++
    }
    if (isSameFreq(s1_freq, w_freq)) return true
  }
  return false
}
// @lc code=end
