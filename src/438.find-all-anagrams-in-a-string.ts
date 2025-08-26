/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  const sl = s.length, pl = p.length
  const ans: number[] = []
  const fm = new Map<string, number>() // frequency map of char
  let maxFreq = 0
  for (let i = 0; i < sl; i++) {
    // remove which are out of window
    if (i >= pl) {
      const freq = fm.get(s[i - pl])!
      if (freq > 1) {
        fm.set(s[i - pl], freq - 1)
      } else fm.delete(s[i - pl])
      maxFreq--
    }

    // add new character to window
    if(fm.has(s[i])) {
      fm.set(s[i], fm.get(s[i])!+1)
    } else 
    const freq = fm.get(s[i])!
  }
}
// Input: s = "cbaebabacd", p = "abc"
// @lc code=end
