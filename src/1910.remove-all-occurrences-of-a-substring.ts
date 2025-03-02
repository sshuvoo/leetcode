/*
 * @lc app=leetcode id=1910 lang=typescript
 *
 * [1910] Remove All Occurrences of a Substring
 */

// @lc code=start
// https://github.com/sshuvoo
function removeOccurrences(s: string, part: string): string {
  while (true) {
    const i = s.indexOf(part)
    if (i === -1) break
    s = s.slice(0, i) + s.slice(i + part.length, s.length)
  }
  return s
}
// https://github.com/sshuvoo
// @lc code=end
