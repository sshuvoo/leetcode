/*
 * @lc app=leetcode id=1047 lang=typescript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const stack: string[] = []
  for (const char of s) {
    if (stack.length > 0) {
      const peek = stack[stack.length - 1]!
      if (char == peek) {
        stack.pop()
        continue
      }
    }
    stack.push(char)
  }
  return stack.join('')
}
// @lc code=end
