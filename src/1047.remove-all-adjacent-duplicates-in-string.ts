/*
 * @lc app=leetcode id=1047 lang=typescript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const stack: string[] = []
  for (const char of s) {
    if (char == stack.at(-1)) {
      stack.pop()
    } else stack.push(char)
  }
  return stack.join('')
}
// @lc code=end
