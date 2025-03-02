/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
// https://github.com/sshuvoo
function reverseString(s: string[]): void {
  let lp = 0, rp = s.length - 1
  while (lp < rp) {
    ;[s[lp], s[rp]] = [s[rp], s[lp]]
    lp++
    rp--
  }
}
// https://github.com/sshuvoo
// @lc code=end
