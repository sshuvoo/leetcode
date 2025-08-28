/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const sl = s.length,
    tl = t.length
  let li = 0,
    ri = sl-1,
    lp = 0,
    rp = 0 // left-right index, pointer
  const freqT = new Map<string, number>() // frequency of char of T
  const freqW = new Map<string, number>() // frequency of char of window

  for (const char of t) {
    freqT.set(char, (freqT.get(char) ||0) + 1)
    freqW.set(char, 0)
  }

  let totalW = 0
  while (rp < sl) {
    if (totalW < tl) {
      if (freqT.has(s[rp])) {
        const fT = freqT.get(s[rp])!
        const fw = freqW.get(s[rp])!
        if (fw < fT) totalW++
        freqW.set(s[rp], fw + 1)
      }

      if (totalW == tl && rp - lp < ri - li) {
        li = lp
        ri = rp
        if (rp == 5) {
          console.log({ totalW, li, ri })
        }
      }
      rp++
    } else {
      if (freqT.has(s[lp])) {
        const ft = freqT.get(s[lp])!
        const fw = freqW.get(s[lp])!
        if (fw <= ft) totalW--
        freqW.set(s[lp], fw - 1)
      }
      if (totalW == tl && rp - lp < ri - li) {
        li = lp
        ri = rp
      }
      lp++
    }
  }
  return s.slice(li, ri + 1)
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
// @lc code=end

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
