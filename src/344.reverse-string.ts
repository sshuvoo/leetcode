/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    const temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
}
// https://leetcode.com/u/nofaceman/
// https://github.com/sshuvoo
// @lc code=end
